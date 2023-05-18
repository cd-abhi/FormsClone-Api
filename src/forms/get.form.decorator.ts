import { createParamDecorator } from '@nestjs/common';

export const GetForm = createParamDecorator((data, obj) => {
  if (obj.args.length > 0) {
    const request = obj.args[2].req;
    return request.user;
  }
  return null;
});
