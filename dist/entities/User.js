"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Organisation_1 = require("./Organisation");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Length)(6, 100),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Organisation_1.Organisation, organisation => organisation.users, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'user_organisations', // Custom join table name
        joinColumn: {
            name: 'userId',
            referencedColumnName: 'userId'
        },
        inverseJoinColumn: {
            name: 'organisationId',
            referencedColumnName: 'orgId'
        }
    }),
    __metadata("design:type", Array)
], User.prototype, "organisations", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["userId", "email"])
], User);
