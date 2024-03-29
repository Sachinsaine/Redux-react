// import { Formik, Form, ErrorMessages, Field } from "formik";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

/* eslint-disable react/no-unknown-property */
export const SingUp = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string("")
          .required("*This field is required")
          .min(4, "*Username must be atleast 4 characters"),
        email: Yup.string("")
          .required("*This field is required")
          .email("*Invalid Email Format"),
        password: Yup.string("")
          .required("*This field is required")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <section>
        <div className="flex items-center justify-center px-4 py-4 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign up to create account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signIn"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <Form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    for="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div>
                    <Field
                      type="text"
                      name="username"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Full Name"
                      id="name"
                    />
                    <small className="text-red-600 fw-bold">
                      <ErrorMessage name="username" />
                    </small>
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div>
                    <Field
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                    <small className="text-red-600 fw-bold">
                      <ErrorMessage name="email" />
                    </small>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div>
                    <Field
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                    />
                    <small className="text-red-600 fw-bold">
                      <ErrorMessage name="password" />
                    </small>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Sign Up
                </button>

                <Link
                  to="/login"
                  type="button"
                  className="inline-flex no-underline w-full items-center justify-center rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Cancel
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </Formik>
  );
};
