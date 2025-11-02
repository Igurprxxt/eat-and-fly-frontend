// Importing necessary utilities
import { staff, product } from "utils/apiUtils/endpoints";
import { callApi } from "utils/apiUtils/index";
import { ApiEndpoint } from "types/api";

interface InviteStaff {
  body: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
}

export async function createProduct({ body }: any) {
  return callApi({
    uriEndPoint: { ...product.addProduct.v1 } as ApiEndpoint,
    body,
  });
}

export async function updateProduct({ body, pathParams }: any) {
  return callApi({
    uriEndPoint: { ...product.updateProduct.v1 } as ApiEndpoint,
    body,
    pathParams,
  });
}

export async function fetchAllProduct({ query }: any) {
  return callApi({
    uriEndPoint: { ...product.fetchAllProduct.v1 } as ApiEndpoint,
    query,
  });
}

export async function getSingleFetch({ pathParams }: any) {
  return callApi({
    uriEndPoint: { ...product.fetchProduct.v1 } as ApiEndpoint,
    pathParams,
  });
}

export async function updateStaffPassword({ body }: any) {
  return callApi({
    uriEndPoint: { ...staff.updatePassword.v1 } as ApiEndpoint,
    body,
  });
}

export async function resendInvite({ body }: any) {
  return callApi({
    uriEndPoint: { ...staff.resendInvite.v1 } as ApiEndpoint,
    body,
  });
}

export async function acceptStaff({ body }: any) {
  return callApi({
    uriEndPoint: { ...staff.acceptRecruiter.v1 } as ApiEndpoint,
    body,
  });
}

export async function UpdateStatus({ body, pathParams }: any) {
  return callApi({
    uriEndPoint: { ...staff.UpdateStatus.v1 } as ApiEndpoint,
    body,
    pathParams,
  });
}
