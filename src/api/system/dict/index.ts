import http from '/@/utils/http/axios';
import {RequestEnum} from '/@/enums/httpEnum'

enum Api {
  adminDictConfig = '/admin/dict_config',
}

/**
 * 获取账号管理列表
 * @param params
 */
export function getAdminDictConfig(params) {
  return http.request({
    url: Api.adminDictConfig,
    method: RequestEnum.GET,
    params,
  });
}

/**
 * 删除账号
 * @param params
 */
export function delAdminDictConfig(id: string) {
  return http.request({
    url: [Api.adminDictConfig, id].join('/'),
    method: RequestEnum.DELETE,
  }, {
    successMessageText: '删除成功',
    errorMessageText: '删除失败'
  });
}

/**
 * 修改账号
 * @param params
 */
export function patchAdminDictConfig(id, params) {
  return http.request({
    url: [Api.adminDictConfig, id].join('/'),
    method: RequestEnum.PATCH,
    params,
  }, {
    successMessageText: '修改成功',
    errorMessageText: '修改失败'
  });
}


/**
 * 新建账号
 * @param params
 */
export function postAdminDictConfig(params) {
  return http.request({
    url: Api.adminDictConfig,
    method: RequestEnum.POST,
    params,
  }, {

    successMessageText: '创建成功',
    errorMessageText: '创建失败'
  });
}
