---
date: 2024-12-23
---
So in the last log, we successfully transferred the file between 2 programs by chunking it. Today, we will tackle allowing multiple clients to connect to the server , allowing file sharing between them, and maybe encryption. You might be thinking though, "This is not a peer-to-peer system, this is a centralized server! You liar!" And you would be correct. 

I'm not going to jump straight into P2P connections yet, because it is admittedly a bit more complicated than I had anticipated when I jumped head first into this project. So after a little bit of research, here is an updated roadmap of sorts for where I'm planning to take this project. First, we will implement a centralized server approach, where we can refine our chunking, encryption and file transfer logic. And step-by-step we can reduce the server dependency of the app, slowly transitioning to a fully P2P file-sharing app. Sounds good? Awesome. 
## Restructuring the project
Right now this is a skeleton of how our file structure looks for this project
```
src
|- bin
	|- server.rs
	|- client.rs
|- Cargo.toml
```
Do you see the problem here? The server and client code are part of the same `cargo` crate, which will cause us some problems when we eventually try to host the server on the internet, and allow users to download the client app alone. So we're going to restructure the project into two different crates, for the client and the server. Now is the perfect time to come up with a name for the app. And I've decided on **Glide**. There's really no special reason as to why I'm calling it Glide except that its pretty cool lol. 

After a bit of restructuring this is what our file structure looks like
```
glide
├── Cargo.lock
├── Cargo.toml
├── glide-client
│   ├── Cargo.toml
│   └── src
│       └── main.rs
├── glide-server
│   ├── Cargo.toml
│   └── src
│       └── main.rs
└── src
    └── main.rs
```

And I'm sorry to tell you that, that's all I have time for today actually. Today turned out to be busier than I expected and things didn't turn out how I wanted things to. Sorry about that, hopefully we can get back on track tomorrow, catch ya later!