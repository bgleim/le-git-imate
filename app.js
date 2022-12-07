function updateTime() {

    let email_label = document.getElementById("sigstore-email-id");
    

    if (email_label !== undefined) {
        email_label.innerText += "test@test.com";
        var retrieveObject = function(id) {
            return new Promise((resolve, reject) => {
                chrome.storage.local.get(id, items => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(items[id]);
                    }
                });
            });
        }
        
    }
    else {
        setTimeout(updateTime, 3000);
    }
    
}

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(updateTime, 3000);
    console.log("updating html in 3 seconds...");
   
   /* chrome.tabs.getSelected(null, function(tab) {
        let url = tab.url;
        // Check for account info
        checkAccountInfo((account) => {

            // Set basic config
            setConfig({
                account,
                repo: urlInfo.repo,
                server
            }, () => {
                // Call content script to gather UI info
                let commitType = urlInfo.commitType;
                getUiInfo({
                    commitType
                }, ({
                    uiInfo
                }) => {
                    let requestInfo = {
                        ...urlInfo,
                        ...uiInfo
                    };

                    // Perform the request
                    performRequest({
                        requestInfo
                    });

                });

            });
        });
    });
*/
    // Push new commit to the server
    let push_commit = document.getElementById('push_commit')
    if (push_commit) addEventListener('click', pushCommit);
});