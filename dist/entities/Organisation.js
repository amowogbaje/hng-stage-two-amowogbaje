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
exports.Organisation = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const User_1 = require("./User");
let Organisation = class Organisation {
};
exports.Organisation = Organisation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Organisation.prototype, "orgId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], Organisation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organisation.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => User_1.User, user => user.organisations),
    __metadata("design:type", Array)
], Organisation.prototype, "users", void 0);
exports.Organisation = Organisation = __decorate([
    (0, typeorm_1.Entity)()
], Organisation);
