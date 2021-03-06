import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1630486724726 implements MigrationInterface {
    name = 'Init1630486724726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" DROP CONSTRAINT "FK_97c00127b2796c081e3d1b194b2"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" DROP CONSTRAINT "FK_05317c74cb16453843333c7d1cd"`);
        await queryRunner.query(`ALTER TABLE "public"."features" ADD CONSTRAINT "UQ_3577cb0f7f21b6673f107f4ec9a" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenants" DROP CONSTRAINT "FK_f8a06a5fd114c705686a22b02e4"`);
        await queryRunner.query(`ALTER TABLE "public"."clients" ADD CONSTRAINT "UQ_4502c43b0e978c1ccb2d1b3f80d" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" ADD CONSTRAINT "UQ_b43ac75d29d367bfc57809d5c2a" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_alerts" ADD CONSTRAINT "UQ_4108b72f4247bd292bbaf15cea3" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" ADD CONSTRAINT "UQ_3574bcf90d195677adc71fe1003" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_alerts" DROP CONSTRAINT "FK_631e7d3ff82e52b48e317b3bff4"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" DROP CONSTRAINT "FK_1faa1e2f81ddf2bd945a24c8500"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" ADD CONSTRAINT "UQ_ac0451ccd1f9c0545d303b70a13" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" DROP CONSTRAINT "FK_581edd2218543bc22a235a33a8f"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" ADD CONSTRAINT "UQ_7d8a0bf779af0f94dc5348a1be0" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" DROP CONSTRAINT "FK_00dd3d184b29a9e68142332a822"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" DROP CONSTRAINT "FK_d1f9a817b7d4e3d7c1b1477f316"`);
        await queryRunner.query(`ALTER TABLE "public"."tenants" ADD CONSTRAINT "UQ_416ce96e2312df22e5c2cfeddca" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" DROP CONSTRAINT "FK_c712805006d68926599bac7ff2e"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" ADD CONSTRAINT "UQ_66d2c3a23ae6ec3b8de3a1ac9eb" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" DROP CONSTRAINT "FK_fda6bc62ad1ce0b0ffb6e72ba4f"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" DROP CONSTRAINT "FK_047327fa8a1c6dc199273f73c2c"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "UQ_d9b0d3777428b67f460cf8a9b14" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" ADD CONSTRAINT "UQ_2c1beb9f4c0297187747bd6a865" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" DROP CONSTRAINT "FK_9f902867fc6a1b928acb32ea5f1"`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" DROP CONSTRAINT "FK_46e79312262cdae7421b476af01"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" DROP CONSTRAINT "FK_75214ab79abb9a98337b3fad528"`);
        await queryRunner.query(`ALTER TABLE "public"."roles" ADD CONSTRAINT "UQ_d40adf1f0bda238c39fdbf8ab10" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" ADD CONSTRAINT "UQ_0264372a602ba91d7220a982f62" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."app_messages" DROP CONSTRAINT "FK_17d85cb21fd0095b313fb36087c"`);
        await queryRunner.query(`ALTER TABLE "public"."features" DROP CONSTRAINT "FK_c7c4ded69fb64662d2658fbb1bd"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" DROP CONSTRAINT "FK_e6df611b5f89b80fedf82cae192"`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" DROP CONSTRAINT "FK_553e5e8f46e908647353d156d0e"`);
        await queryRunner.query(`ALTER TABLE "public"."apps" ADD CONSTRAINT "UQ_c6106e070775a5695a03644b8d1" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."app_messages" ADD CONSTRAINT "UQ_01a2c9b5246859a272500f73dc7" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."features" ADD CONSTRAINT "FK_c7c4ded69fb64662d2658fbb1bd" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" ADD CONSTRAINT "FK_97c00127b2796c081e3d1b194b2" FOREIGN KEY ("featuresId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" ADD CONSTRAINT "FK_491fa2dad3876d82ff5d891f7e0" FOREIGN KEY ("tenantAppsId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_alerts" ADD CONSTRAINT "FK_631e7d3ff82e52b48e317b3bff4" FOREIGN KEY ("tenantUserAppsId") REFERENCES "tenant_user_apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" ADD CONSTRAINT "FK_9f902867fc6a1b928acb32ea5f1" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" ADD CONSTRAINT "FK_1faa1e2f81ddf2bd945a24c8500" FOREIGN KEY ("tenantUserAppsId") REFERENCES "tenant_user_apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" ADD CONSTRAINT "FK_581edd2218543bc22a235a33a8f" FOREIGN KEY ("tenantAppsId") REFERENCES "tenant_apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" ADD CONSTRAINT "FK_c712805006d68926599bac7ff2e" FOREIGN KEY ("tenantUsersId") REFERENCES "tenant_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" ADD CONSTRAINT "FK_e6df611b5f89b80fedf82cae192" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" ADD CONSTRAINT "FK_d1f9a817b7d4e3d7c1b1477f316" FOREIGN KEY ("tenantsId") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenants" ADD CONSTRAINT "FK_f8a06a5fd114c705686a22b02e4" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" ADD CONSTRAINT "FK_fda6bc62ad1ce0b0ffb6e72ba4f" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" ADD CONSTRAINT "FK_00dd3d184b29a9e68142332a822" FOREIGN KEY ("tenantsId") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" ADD CONSTRAINT "FK_05317c74cb16453843333c7d1cd" FOREIGN KEY ("featuresId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" ADD CONSTRAINT "FK_75214ab79abb9a98337b3fad528" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" ADD CONSTRAINT "FK_047327fa8a1c6dc199273f73c2c" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" ADD CONSTRAINT "FK_553e5e8f46e908647353d156d0e" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" ADD CONSTRAINT "FK_46e79312262cdae7421b476af01" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."app_messages" ADD CONSTRAINT "FK_17d85cb21fd0095b313fb36087c" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."app_messages" DROP CONSTRAINT "FK_17d85cb21fd0095b313fb36087c"`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" DROP CONSTRAINT "FK_46e79312262cdae7421b476af01"`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" DROP CONSTRAINT "FK_553e5e8f46e908647353d156d0e"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" DROP CONSTRAINT "FK_047327fa8a1c6dc199273f73c2c"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" DROP CONSTRAINT "FK_75214ab79abb9a98337b3fad528"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" DROP CONSTRAINT "FK_05317c74cb16453843333c7d1cd"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" DROP CONSTRAINT "FK_00dd3d184b29a9e68142332a822"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" DROP CONSTRAINT "FK_fda6bc62ad1ce0b0ffb6e72ba4f"`);
        await queryRunner.query(`ALTER TABLE "public"."tenants" DROP CONSTRAINT "FK_f8a06a5fd114c705686a22b02e4"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" DROP CONSTRAINT "FK_d1f9a817b7d4e3d7c1b1477f316"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" DROP CONSTRAINT "FK_e6df611b5f89b80fedf82cae192"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" DROP CONSTRAINT "FK_c712805006d68926599bac7ff2e"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" DROP CONSTRAINT "FK_581edd2218543bc22a235a33a8f"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" DROP CONSTRAINT "FK_1faa1e2f81ddf2bd945a24c8500"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" DROP CONSTRAINT "FK_9f902867fc6a1b928acb32ea5f1"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_alerts" DROP CONSTRAINT "FK_631e7d3ff82e52b48e317b3bff4"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" DROP CONSTRAINT "FK_491fa2dad3876d82ff5d891f7e0"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" DROP CONSTRAINT "FK_97c00127b2796c081e3d1b194b2"`);
        await queryRunner.query(`ALTER TABLE "public"."features" DROP CONSTRAINT "FK_c7c4ded69fb64662d2658fbb1bd"`);
        await queryRunner.query(`ALTER TABLE "public"."app_messages" DROP CONSTRAINT "UQ_01a2c9b5246859a272500f73dc7"`);
        await queryRunner.query(`ALTER TABLE "public"."apps" DROP CONSTRAINT "UQ_c6106e070775a5695a03644b8d1"`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" ADD CONSTRAINT "FK_553e5e8f46e908647353d156d0e" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" ADD CONSTRAINT "FK_e6df611b5f89b80fedf82cae192" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."features" ADD CONSTRAINT "FK_c7c4ded69fb64662d2658fbb1bd" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."app_messages" ADD CONSTRAINT "FK_17d85cb21fd0095b313fb36087c" FOREIGN KEY ("appsId") REFERENCES "apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" DROP CONSTRAINT "UQ_0264372a602ba91d7220a982f62"`);
        await queryRunner.query(`ALTER TABLE "public"."roles" DROP CONSTRAINT "UQ_d40adf1f0bda238c39fdbf8ab10"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" ADD CONSTRAINT "FK_75214ab79abb9a98337b3fad528" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."app_roles" ADD CONSTRAINT "FK_46e79312262cdae7421b476af01" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" ADD CONSTRAINT "FK_9f902867fc6a1b928acb32ea5f1" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" DROP CONSTRAINT "UQ_2c1beb9f4c0297187747bd6a865"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "UQ_d9b0d3777428b67f460cf8a9b14"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" ADD CONSTRAINT "FK_047327fa8a1c6dc199273f73c2c" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" ADD CONSTRAINT "FK_fda6bc62ad1ce0b0ffb6e72ba4f" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" DROP CONSTRAINT "UQ_66d2c3a23ae6ec3b8de3a1ac9eb"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" ADD CONSTRAINT "FK_c712805006d68926599bac7ff2e" FOREIGN KEY ("tenantUsersId") REFERENCES "tenant_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenants" DROP CONSTRAINT "UQ_416ce96e2312df22e5c2cfeddca"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" ADD CONSTRAINT "FK_d1f9a817b7d4e3d7c1b1477f316" FOREIGN KEY ("tenantsId") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_users" ADD CONSTRAINT "FK_00dd3d184b29a9e68142332a822" FOREIGN KEY ("tenantsId") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_apps" DROP CONSTRAINT "UQ_7d8a0bf779af0f94dc5348a1be0"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" ADD CONSTRAINT "FK_581edd2218543bc22a235a33a8f" FOREIGN KEY ("tenantAppsId") REFERENCES "tenant_apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_apps" DROP CONSTRAINT "UQ_ac0451ccd1f9c0545d303b70a13"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" ADD CONSTRAINT "FK_1faa1e2f81ddf2bd945a24c8500" FOREIGN KEY ("tenantUserAppsId") REFERENCES "tenant_user_apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_alerts" ADD CONSTRAINT "FK_631e7d3ff82e52b48e317b3bff4" FOREIGN KEY ("tenantUserAppsId") REFERENCES "tenant_user_apps"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_roles" DROP CONSTRAINT "UQ_3574bcf90d195677adc71fe1003"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_user_app_alerts" DROP CONSTRAINT "UQ_4108b72f4247bd292bbaf15cea3"`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" DROP CONSTRAINT "UQ_b43ac75d29d367bfc57809d5c2a"`);
        await queryRunner.query(`ALTER TABLE "public"."clients" DROP CONSTRAINT "UQ_4502c43b0e978c1ccb2d1b3f80d"`);
        await queryRunner.query(`ALTER TABLE "public"."tenants" ADD CONSTRAINT "FK_f8a06a5fd114c705686a22b02e4" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."features" DROP CONSTRAINT "UQ_3577cb0f7f21b6673f107f4ec9a"`);
        await queryRunner.query(`ALTER TABLE "public"."feature_permissions" ADD CONSTRAINT "FK_05317c74cb16453843333c7d1cd" FOREIGN KEY ("featuresId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tenant_app_features" ADD CONSTRAINT "FK_97c00127b2796c081e3d1b194b2" FOREIGN KEY ("featuresId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
