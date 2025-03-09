html,
body {
    cursor: url("https://i.imgur.com/5v5M8gh.png"), auto;
}
a:hover {
    cursor: url("https://i.imgur.com/IXULuQ1.png"), auto;
}

html {
    /* background: linear-gradient(-20deg, #e0c3fc 0%, #fff0f3 100%); */
    background: linear-gradient(-20deg, lightskyblue 0%, skyblue 100%);
    font-family: "DM Sans", sans-serif;
    margin: 0;
    padding: 0;
}

body {
    font-family: "DM Sans", sans-serif;
    margin: 0;
    padding: 0;
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.light-orange {
    color: #ef9d64;
}

.light-green {
    color: #85d18a;
}

.light-blue {
    color: #6a8de4;
}

.light-purple {
    color: #b197fc;
}

h2 {
    text-align: center;
    font-weight: 700;
}

a {
    text-decoration: none;
    color: #6a8de4;
}

#root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 100vh;
}

#main {
    display: block;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 411px;
    max-width: 411px;
    min-height: 823px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 7px 7px 20px -5px rgba(0, 0, 0, .1);
}

.container {
    padding: 0 15px;
}

#cover-image {
    background-position: center;
    background-size: cover;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    width: 411px;
    height: 165px;
    position: relative;
    left: -15px;
}

#profile-header {
    position: relative;
    display: grid;
    grid-template-columns: 120px auto;
    column-gap: 15px;
    margin-bottom: -10px;
}

#avatar-image {
    position: relative;
    background-position: center;
    background-size: cover;
    border-radius: 30px;
    width: 120px;
    height: 120px;
    top: -25px;
}

#name {
    position: relative;
    padding-top: 5px;
}

.names {
    font-weight: 600;
    font-size: 26px;
    margin: 0;
}

.nicknames {
    font-weight: 500;
    font-size: 20px;
    margin: 0;
}

#skills {
    padding-top: 5px;
    margin-left: 5px;
}

#skills-qr {
    padding-top: 0px;
    margin-left: 2px;
}

.skill-item {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    position: relative;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    margin-right: 10px;
    width: auto;
}

.skill-item::before {
    position: absolute;
    content: "";
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    height: 18px;
    background-color: currentColor;
    opacity: .2;
    border-radius: 5px;
}

.bio-story {
    position: relative;
    display: grid;
    grid-template-columns: 70px auto;
    height: 70px;
    width: 100%;
    background-color: #e8f0fb;
    border-radius: 20px;
    -webkit-box-shadow: 7px 7px 20px -5px rgba(0, 0, 0, .4);
    box-shadow: 7px 7px 20px -5px rgba(0, 0, 0, .1);
    margin-bottom: 15px;
}

.bio-story-thumb {
    position: relative;
    width: 50px;
    height: 50px;
    background-position: center;
    background-size: cover;
    border-radius: 15px;
    margin: 10px;
}

.bio-story-content p {
    position: relative;
    font-size: 15px;
    margin-top: 10px;
    font-weight: 600;
    margin-bottom: 10px;
}

.bio-story-content span {
    position: relative;
    font-size: 12px;
    bottom: 15px;
    color: #587fe1;
    font-weight: 500;
}

#content-body {
    position: relative;
    margin-top: 20px;
    max-width: 100%;
}

.drop-title {
    font-weight: 600;
    font-size: 18px;
    margin-left: 10px;
}

#link-box {
    position: relative;
    width: 100%;
}

.link-item {
    position: relative;
    display: grid;
    grid-template-columns: 70px auto 65px;
    height: 70px;
    width: 100%;
    background-color: #fafafa;
    border-radius: 20px;
    margin-bottom: 15px;
    -webkit-box-shadow: 7px 7px 20px -5px rgba(0, 0, 0, .4);
    box-shadow: 7px 7px 20px -5px rgba(0, 0, 0, .1);
    transition: all 250ms ease-in-out;
}

.link-item:hover {
    background-color: #eee;
}

.link-content {
    padding-top: 15px;
}

.link-content p {
    margin: 0;
    font-weight: 600;
}

.link-content span {
    position: absolute;
    font-weight: 400;
    font-size: 14px;
    bottom: 15px;
    color: #a6a9b1;
    max-width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    transition: all 250ms;
    cursor: pointer;
}

.link-content span:hover {
    color: #7c7e83;
}

.link-btn-chill {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    position: relative;
    margin-top: 15px;
    font-size: 14px;
    width: auto;
    font-weight: 600;
}

.link-btn-chill::before {
    position: absolute;
    content: "";
    padding-left: 7px;
    padding-right: 7px;
    width: 40px;
    height: 18px;
    background-color: currentColor;
    opacity: .2;
    border-radius: 5px;
    top: -1px;
    transition: all 250ms;
}

.link-btn-chill {
    transition: all 250ms ease-in-out;
}

.link-btn-chill:hover::before {
    opacity: .5;
}

@media only screen and (max-width: 425px) {
    #root {
        display: block;
    }

    #main {
        top: 0;
        left: 0;
        border-radius: 0;
        width: 100%;
        margin: 0;
        margin-right: 0;
    }

    #cover-image {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: 100vw;
    }

    .container {
        width: 90%;
    }
}

@media only screen and (max-width: 350px) and (min-width: 150px) {
    #name,
    #first-name {
        font-size: 22px;
    }

    #nickname {
        font-size: 16px;
    }

    .skill-item {
        font-size: 12px;
    }
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}
.modal-content {
    background-color: #fff;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 350px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
.qr-image {
    width: 250px;
    max-width: 250px;
    height: 250px;
    border-radius: 10px;
    display: block;
    margin: 20px auto;
}

.modal-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

button {
    width: 110px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
}

button:active {
    opacity: 0.8;
}

button:hover {
    opacity: 0.8;
}

.download-btn {
    background-color: dodgerblue;
    color: white;
}

.copy-btn {
    background-color: limegreen;
    color: white;
}
