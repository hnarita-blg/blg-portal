


/**
 * 承認グループマスタから承認者リストを取得し、指定の承認ステップに設定する
 *
 * @param {Object} form - SateraitoWFのフォームオブジェクト
 * @param {string} groupId - 承認グループID
 * @param {number} stepNo - 承認ステップ番号
 * @param {string} [defaultApprover] - デフォルト承認者（グループに登録がない場合の代替）
 * @returns {void}
 */
function addApproverFromApprovalGroup(form, groupId, stepNo, defaultApprover) {

  // 承認グループマスタから承認者リストを取得し指定の承認ステップに設定する
  SateraitoWF.requestMasterDataRow('approval_group', groupId, function (aRow) {
    if (typeof (aRow) != 'undefined' && typeof (aRow.attribute_1) != 'undefined') {
      const approvers = aRow.attribute_1.split(' ');
      for(let i = 0; i < approvers.length; i++){
        let approver = approvers[i];
        SateraitoWF.addApprover(form, stepNo, approver);
      }
    } else if(typeof (defaultApprover) != 'undefined'){
      // 登録がない場合 && デフォルト承認者を設定する
      SateraitoWF.addApprover(form, stepNo, defaultApprover);
    }
  });

}

/**
 * エラーメッセージダイアログを表示し、指定したフィールドにフォーカスを設定する
 *
 * @param {Object} form - jQueryフォームオブジェクト
 * @param {string} title - ダイアログのタイトル
 * @param {string} message - 表示するエラーメッセージ
 * @param {string} nameAttribute - フォーカスを設定するフィールドのname属性値
 * @returns {void}
 */
function showErrorMessage(form, title, message, nameAttribute){

    SateraitoWF.alert(`${message}`, `${title}`, function(is_ok){
        if(is_ok){
            $(form).find(`[name=${nameAttribute}]`).focus();
        }
    });

};
