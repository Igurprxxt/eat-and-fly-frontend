// Importing necessary utilities
import { staff } from 'utils/apiUtils/endpoints';
import { callApi } from 'utils/apiUtils/index';
import { ApiEndpoint } from 'types/api';

interface InviteStaff {
  body: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
}

export async function inviteStaff({ body }: InviteStaff) {
  return callApi({
    uriEndPoint: { ...staff.invite.v1 } as ApiEndpoint,
    body
  });
}

export async function GetAllStaff({ query }: any) {
  return callApi({
    uriEndPoint: { ...staff.fetchAllFetch.v1 } as ApiEndpoint,
    query
  });
}


export async function resendInvite({ body }: any) {
  return callApi({
    uriEndPoint: { ...staff.resendInvite.v1 } as ApiEndpoint,
    body
  });
}


export async function acceptStaff({ body }: any) {
  return callApi({
    uriEndPoint: { ...staff.acceptRecruiter.v1 } as ApiEndpoint,
    body
  });
}


export async function UpdateStatus({ body, pathParams }: any) {
  return callApi({
    uriEndPoint: { ...staff.UpdateStatus.v1 } as ApiEndpoint,
    body, pathParams
  });
}





