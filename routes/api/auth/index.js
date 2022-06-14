"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var service_1 = require("../../../models/users/service");
var users_1 = require("../../../server/request/schema/users");
var users_2 = require("../../../server/request/schema/users");
var service_2 = require("../../../models/users/service");
var utils_1 = require("../../../server/response/utils");
var jwt_1 = require("../../../server/request/middleware/jwt");
var repository_1 = require("../../../models/users/repository");
var user_1 = require("../../../collections/user");
function default_1(fastify, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var pathApi;
        var _this = this;
        return __generator(this, function (_a) {
            pathApi = '/api/auth';
            //signup
            fastify.post(pathApi + '/signup', {
                schema: users_1.schemaCreateUser
            }, function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                var _a, name, password, email;
                return __generator(this, function (_b) {
                    _a = request.body, name = _a.name, password = _a.password, email = _a.email;
                    return [2 /*return*/, (0, service_1.createUser)(name, password, email)];
                });
            }); });
            //sign
            fastify.post(pathApi + '/signin', {
                schema: users_2.schemaLoginUser
            }, function (request, reply) {
                var _a = request.body, password = _a.password, email = _a.email;
                return (0, service_2.singUser)(email, password)
                    .then(function (user) {
                    var payload = { id: user.id };
                    var token = fastify.jwt.sign(payload);
                    (0, utils_1.sendToken)(reply, token);
                })["catch"](function (err) {
                    (0, utils_1.failResponse)(reply, err);
                });
            });
            //me
            fastify.get(pathApi + '/me', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                var getIdJwt, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getIdJwt = (0, jwt_1.parseGetJwt)(request, fastify);
                            return [4 /*yield*/, (0, repository_1.findOneById)(getIdJwt.id)];
                        case 1:
                            user = _a.sent();
                            if (user) {
                                return [2 /*return*/, (0, user_1.userEditSerialize)(user)];
                            }
                            else {
                                reply.statusCode = 403;
                                reply.send('user not found');
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports["default"] = default_1;