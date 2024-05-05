import { ValidationOptions, registerDecorator } from 'class-validator';

export function IsNotFutureYear(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNotFutureYear',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const currentYear = new Date().getFullYear();
          return value <= currentYear;
        },
        defaultMessage() {
          return `$property must not be in the future`;
        },
      },
    });
  };
}
