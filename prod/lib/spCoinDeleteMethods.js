const {} = require("./utils/serialize");
const {} = require("./utils/logging");

let spCoinContractDeployed;

//////////////////////////// ROOT LEVEL FUNCTIONS ////////////////////////////

setContractDeleteMethods = (_spCoinContractDeployed) => {
  spCoinContractDeployed = _spCoinContractDeployed;
};

////////////////////////// DELETE ACCOUNT FUNCTIONS //////////////////////////

deleteAccountRecord = async (_accountKey) => {
  // ToDo: do Solidity Code and Testing
    logFunctionHeader("deleteAccountRecord = async(" + _accountKey + ")");
    logDetail("JS => Deleting Account " + _accountKey + " From Blockchain Network");
    await spCoinContractDeployed.deleteAccountRecord(_accountKey);
};

deleteAccountRecords = async (_accountListKeys) => {
  logFunctionHeader("deleteAccountRecords = async(arrayAccounts)");
  let maxCount = _accountListKeys.length;
  logDetail("JS => Inserting " + maxCount + " Records to Blockchain Network");
  
  for (idx = 0; idx < maxCount; idx++) {
    let accountKey = _accountListKeys[idx];
    logDetail("JS => Deleting " + idx + ", " + accountKey);
    await deleteAccountRecord(accountKey);
  }
  logDetail("JS => Inserted " + maxCount + " Accounts to Blockchain Network");
};

/////////////////////// RECIPIENT RECORD FUNCTIONS ///////////////////////

deletePatronRecipientRecord = async (_patronKey, _recipientKey) => {
  logFunctionHeader("deletePatronRecipientRecord(" + _patronKey + ", " + _recipientKey + ")");
  await spCoinContractDeployed.deletePatronRecipientRecord(_patronKey, _recipientKey);
}

/////////////////////// AGENT RECORD FUNCTIONS ////////////////////////

deleteAgentRecord = async (_accountKey, _recipientKey, _accountAgentKey) => {
  // ToDo: do Solidity Code and Testing
  logFunctionHeader(
    "deleteAgentRecord = async(" + _accountKey + ", " + _recipientKey + ", " + _accountAgentKey + ")"
  );
  logDetail("JS => For Account[" + _accountKey + "]: " + _accountKey + ")");
  logDetail("JS => Deleting Agent " + _accountAgentKey + " From Blockchain Network");

  logDetail("JS =>  " + _accountKey + ". " + "Inserting Agent[" + _accountKey + "]: " + _accountAgentKey );
  // await spCoinContractDeployed.deleteAgentRecord( _accountKey, _recipientKey, _agentKey );
  logDetail("JS => "+ "Deleted = " + _accountAgentKey + " Agent Record from RecipientKey " + _recipientKey);
};

/////////////////////// EXPORT MODULE FUNCTIONS ///////////////////////

module.exports = {
  deleteAccountRecord,
  deleteAccountRecords,
  deleteAgentRecord,
  deletePatronRecipientRecord,
  setContractDeleteMethods,
};
