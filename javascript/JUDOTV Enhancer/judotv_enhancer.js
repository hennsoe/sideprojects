function remove_addbanners() {
    remove_list = ["!justify-start", "!justify-end"];

    for (remove_elem in remove_list) {
        try {
            if (document.getElementsByClassName(remove_list[remove_elem]).length >= 1) {
                document.getElementsByClassName(remove_list[remove_elem])[0].remove()
            }
        } catch (err) {
            if (!err === undefined) {
                console.log(err)
            }
        }
    };
};

//function to make element go fullscreen
function fullscreenthis(elem) {
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen()
        }
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
};

function create_fullscreen_button() {
    //the video frame holder
    videoframe = document.getElementsByClassName("vjs-tech")[0].parentElement

    //Check if fullscreen button exist - if not create one
    if (!!document.getElementById("fsbutton") == false) {
        fs_button = document.createElement("button")
        fs_button.innerHTML = '<span class="vjs-seek-to-live-text" aria-hidden="true">⛶</span>'

        function setAttributes(el, attrs) {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }

        setAttributes(fs_button, { "class": "vjs-control", "type": "button", "title": "Go Fullscreen", "aria-disabled": "true", "onclick": "fullscreenthis(videoframe)", "id": "fsbutton" });

        document.getElementsByClassName("vjs-control-bar")[0].appendChild(fs_button)
    };
}

remove_addbanners();
create_fullscreen_button();