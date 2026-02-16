# CS 260 Notes

1/17/2026
So far, I've set up my AWS account, created a github repository based on the provided template, and learned a bit about tying it into vsCode, making changes here and commiting them to Git.

1/19/2026
I've finished the 1st delieverable, establishing at least a rough outline of the web program I want to make. I've also pretty much figured out the whole add/commit/push workflow.

I've started work on actually setting up my aws stuff, launching my instance and tying it to the domain name "discounteden.click."

discoutneden.click is secure, with the caddy files sucessfully updated via the terminal. I could just be blind, but the instructions didn't seem to mention pressing i to enter insert mode to allow editing of the file. That's what the internet told me to do, but I'm not entirely sure if its ideal.

[My startup - Simon](https://simon.cs260.click)

1/26/2026
I just finished the HTML structure activity. I'll want to remember to use "a" to anchor text to a hyperlink.

Also worked through parts of the other codepen activities. 

1/27/2026
Simon html has been cloned to my dev environment. I've installed live server and used it to get a look at what the Simon html is doing. I've watched through the instructional video on deployment, but am honestly a little confused in that regard. I think I'll be able to follow it for my own startup, but I'm not entirely sure about what the Simon subdomain part of the instructions is talking about.

For my own html, I'm kinda just copying a lot of the Simon code for the head. I've done some research on what it all actually does, and I get the impression that it's all pretty standard website stuff that's pretty much universally necessary. It does things like providing useful language information to search engines and ensuring the right kinds of characters appear on your webpage. I've definitely got to really figure out what I'm doing for the main section though.

Scratch that, I've figured it out. I kinda had to wrestle with chatGPT a bit to figure out how to translate the class instructions to a Windows system, but we got there in the end. Typing simon.discounteden.click works.

Deployment template: ./deployFiles.sh -k ~/keypair/production.pem -h discounteden.click -s simon
Deployment plan: ./deployFiles.sh -k ~/keypair/production.pem -h discounteden.click -s startup

2/2/2026
Simon css has been successfully deployed. It was easier this time than last time, but I had to get a refresher on a few of the extra steps for Windows. I'm just going to note the process I ended up going through, and try to figure out how it actuyally works.

cripsy@DESKTOP-G9E2UE1:/mnt/c/Users/Owner/OneDrive/Desktop/cs260/Simon/simon-css$ chmod +x deployFiles.sh
cripsy@DESKTOP-G9E2UE1:/mnt/c/Users/Owner/OneDrive/Desktop/cs260/Simon/simon-css$ ./deployFiles.sh -k ~/keypair/production.pem -h discounteden.click -s simon
-bash: ./deployFiles.sh: cannot execute: required file not found
cripsy@DESKTOP-G9E2UE1:/mnt/c/Users/Owner/OneDrive/Desktop/cs260/Simon/simon-css$ head -n 1 deployFiles.sh
#!/bin/bash
cripsy@DESKTOP-G9E2UE1:/mnt/c/Users/Owner/OneDrive/Desktop/cs260/Simon/simon-css$ dos2unix deployFiles.sh
dos2unix: converting file deployFiles.sh to Unix format...
cripsy@DESKTOP-G9E2UE1:/mnt/c/Users/Owner/OneDrive/Desktop/cs260/Simon/simon-css$ ./deployFiles.sh -k ~/keypair/production.pem -h discounteden.click -s simon

According to chat:
- chmod +x deployFiles.sh makes the script executable.
- head -n 1 deployFiles.sh checks the interpreter line, making fsure the script looks correct.
- dos2unix deployFiles.sh removes Windows characters, allowing linux to run.

2/3/2026
I'm in the learning phase at the moment. I've pretty much just copied a bit of Simon css over to my own code just for thesake of learning what effect it has, and how to make it apply those effects properly. As I learn how it works, I'll adjust it to fit my vision for my website.

Starting to figure some things out for myself. There's lots of bootstrap classes to sort through, and all of those are referenced directly in html, not css. Specific color picking is easier in css than with bootstrap.

2/13/2026
I believe I've successfully got the Simon react working.

## Deployment Instruction:
chmod +x deployReact.sh
./deployReact.sh -k ~/keys/production.pem -h discounteden.click -s startup

Remember to save before deployment

## Github commits:
git add .
git commit -m "message"
git push

git status - checks status

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
