function doSomething() {
  document.getElementsByClassName("video-js")[0].addEventListener("click", main_inject());
	main_inject();
	console.info("Window Loaded");
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  doSomething();
}


function remove_addbanners() {
    remove_list = ["!justify-start", "!justify-end"];

    for (remove_elem in remove_list) {
        try {
            if (document.getElementsByClassName(remove_list[remove_elem]).length >= 1) {
                document.getElementsByClassName(remove_list[remove_elem])[0].remove()
            }
        } catch (err) {
            if (!err === undefined) {
                console.warn(err)
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
    //videoframe = document.getElementsByClassName("vjs-tech")[0].parentElement
		videoframe = document.getElementsByClassName("video-js")[0]

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

function main_inject(){
	try {
	remove_addbanners();
	} catch(err) {
		console.info("Could not remove adds")
		console.warn(err)
	};
	
	try {
		create_fullscreen_button();
	} catch(err) {
		console.info("Could not add Fullscreen button")
		console.warn(err)
	};
};

main_inject();
