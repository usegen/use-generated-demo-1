import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
    AuthenticatedUser = "AuthenticatedUser",
    Admin = "Admin",
    SuperAdmin = "SuperAdmin"
}


registerEnumType(UserRole, { name: 'UserRole', description: undefined })
