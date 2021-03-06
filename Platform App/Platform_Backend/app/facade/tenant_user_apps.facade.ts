import { Injectable } from "@nestjs/common";
import Tenant_User_AppsAppService from "../appservices/tenant_user_apps.appservice";
import { Tenant_User_AppsDto } from "../../submodules/Portfolio-Platform-Dtos/tenant_user_apps";
import { Tenant_User_App } from "../../submodules/Portfolio-Platform-Entities/tenant_user_apps.entity";
import FacadeBase from "./facadebase";

@Injectable()
export class Tenant_User_AppsFacade extends FacadeBase<Tenant_User_App,Tenant_User_AppsDto>{
    constructor(private tenant_user_appsAppService: Tenant_User_AppsAppService){
       super(tenant_user_appsAppService);
    }
}