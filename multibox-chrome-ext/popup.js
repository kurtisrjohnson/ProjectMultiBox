// var captureButton = document.getElementById('capture_stream_button');
//
// captureButton.onclick = function(element) {
//     chrome.runtime.sendMessage(chrome.runtime.getManifest().id, 'capture', {}, function (args) {
//         // chrome.windows.create({
//         //     url: 'playback_window.html',
//         //     type: 'popup',
//         //     width: 800,
//         //     height: 600
//         // }, function(displayWindow) {
//         //     displayWindow['showStream'](args.streamId);
//         // });
//     });
// };

var launch_app_btn = document.getElementById('launch_app');
launch_app_btn.onclick = function(element) {
    chrome.tabs.create({
        url: 'index.html'
    });
};