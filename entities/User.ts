import IUser from '../interfaces/IUser';

export default class User implements IUser {
   constructor(
      public name: string,
      public email: string,
      public phone: string,
      public cpf: string,
      public id?: string
   ) {}
   static createMany(users: IUser[]): User[] {
      return users.map((user: any) => {
         const { id, name, email, phone, cpf } = user;
         return new User(name, email, phone, cpf, id);
      });
   }
   static createFormObject({ id, name, email, phone, cpf }: IUser): User {
      return new User(name, email, phone, cpf, id);
   }

   get userLink() {
      return `/admin/usuarios/${this.id}`;
   }
   get userEditLink() {
      return `/admin/usuarios/editar/${this.id}`;
   }
}
