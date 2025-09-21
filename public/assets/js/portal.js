



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
