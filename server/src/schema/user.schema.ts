import {object, string, TypeOf} from 'zod'

export const createUserSchema = object({
    body: object({
      firstName: string({
        required_error: "First name is required",
      }),
      lastName: string({
        required_error: "Last Name is required",
      }),
      password: string({
        required_error: "Password is required",
      }).min(6, "Password too short - should be 6 chars minimum"),
      passwordConfirmation: string({
        required_error: "Password Confirmation is required",
      }),
      email: string({
        required_error: "Email is required",
      }).email("Not a valid email"),
    }).refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    }),
  });

  export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;