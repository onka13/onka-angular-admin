import globalEnums from '../global-enums';
const adminApiEnums = {
  ...globalEnums,
  ...{

    AdminRoleAction : {
            Allow: 1, // 
            Block: 2, // 
    },
    AdminUserTheme : {
            Light: 1, // 
            Dark: 2, // 
    },
  }
}
export default adminApiEnums