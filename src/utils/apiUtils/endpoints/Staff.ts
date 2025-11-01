
import defaults from './defaults';

const prefix = '/staff';

const staff = {
  invite: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: prefix + '/invite'
    }
  },

  fetchAllFetch: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: prefix
    }
  },

resendInvite:{
  v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: prefix+ "/resend"
    }
},
    acceptRecruiter: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: prefix+"/accept"
    }
  }, 
    UpdateStatus: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: prefix + '/:id'
    }
  },



};

export default staff;
