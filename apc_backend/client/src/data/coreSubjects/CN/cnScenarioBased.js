const cnScenarioBased = [
  {
    id: 1,
    question: "A user reports they can access a website by typing its IP address directly into the browser, but typing the domain name results in a 'Server Not Found' error. What is the root cause and how do you verify it?",
    answer: "The root cause is a failure in the Domain Name System (DNS) resolution process. You can verify this by running 'nslookup domain.com' or 'dig domain.com' in the terminal to check if the local DNS resolver returns a valid IP.",
    explanation: "Since direct IP access works, the routing, physical link, and target server are completely healthy. The breakdown lies entirely within the system's ability to translate the human-readable string into that network-routable IP address."
  },
  {
    id: 2,
    question: "Your team deploys a web application. During a high-traffic event, the server's CPU spikes because it spends too much time handling the SSL/TLS handshakes rather than processing application logic. How do you re-architect this?",
    answer: "You should offload the TLS decryption by implementing a Load Balancer or Reverse Proxy (like Nginx or AWS ALB) in front of your application servers to handle 'TLS Termination'.",
    explanation: "The asymmetric cryptographic math required for a TLS handshake is highly CPU-intensive. By terminating TLS at the load balancer level, the internal traffic sent from the balancer to the app servers can run over fast, unencrypted HTTP."
  },
  {
    id: 3,
    question: "A company network is experiencing sluggish speeds. A packet capture tool reveals millions of broadcast frames flooding every switch port simultaneously, maxing out link capacities. What is this anomaly and how is it structurally prevented?",
    answer: "This is a 'Broadcast Storm', typically caused by an accidental physical routing loop among redundant network switches. It is structurally prevented by enabling Spanning Tree Protocol (STP) on the switches.",
    explanation: "Because layer-2 Ethernet frames lack a Time-to-Live (TTL) counter, a broadcast frame caught in a physical switch loop will circulate and multiply indefinitely. STP detects loops dynamically and disables redundant physical paths."
  },
  {
    id: 4,
    question: "You are building a multiplayer first-person shooter game where player positions must update 60 times per second. A junior developer suggests using TCP to ensure no movement updates are lost. Why is this a bad choice, and what should be used instead?",
    answer: "TCP is a poor choice due to its Head-of-Line (HOL) blocking mechanism and retransmission delays, which cause sudden lag spikes. You should use UDP instead, handling any critical state verification manually at the application layer.",
    explanation: "If a positional packet drops over TCP, the entire connection halts until that packet is resent. In a live shooter game, an old positional packet is useless; dropping it and instantly rendering the newest packet via UDP keeps gameplay fluid."
  },
  {
    id: 5,
    question: "A server behind a domestic router has a private IP of 192.168.1.50. An external client tries to send a packet directly to this IP address from across the internet, but the connection fails instantly. Why?",
    answer: "IP addresses in the 192.168.X.X range are RFC 1918 Private IP addresses, which are explicitly non-routable on the public internet backbone. To fix this, you must configure 'Port Forwarding' on the router.",
    explanation: "Public internet routers instantly discard incoming packets addressed to private subnets. Port Forwarding tells the edge router's Network Address Translation (NAT) table to map a specific public port directly to the internal host."
  },
  {
    id: 6,
    question: "You notice that downloading a single massive file over a TCP connection across a high-latency transcontinental link never utilizes the full 1Gbps bandwidth, even though the line is completely empty. What is this phenomenon?",
    answer: "This is the 'Long Fat Network' (LFN) bottleneck, governed by the TCP Bandwidth-Delay Product (BDP). The default TCP maximum window size (65,535 bytes) is too small to keep the data pipe filled while waiting for ACKs.",
    explanation: "If the window size is hit before the first ACK returns from across the globe, the sender must stop and wait. To solve this, you must enable the 'TCP Window Scaling' option in the OS configuration to increase allowable outstanding data blocks."
  },
  {
    id: 7,
    question: "An engineer configures two hosts on a switch: Host A has IP 192.168.1.10/24 and Host B has IP 192.168.2.20/24. They are plugged into the same physical hardware, but they cannot ping each other. Explain why.",
    answer: "They belong to different logical IP subnets (192.168.1.0 and 192.168.2.0). Host A's subnet mask (/24) dictates that any IP outside its immediate pool requires a Gateway Router to hop between networks.",
    explanation: "Even though they share a physical layer-2 switch, layer-3 network logic rules that a host will not attempt a direct local ARP request for an IP address that it recognizes as outside its own designated subnet boundaries."
  },
  {
    id: 8,
    question: "A client initiates an HTTP request over a cellular network that drops packets frequently. You notice that the TCP connection takes an exceptionally long time to recover its speed after a single packet drop. Why?",
    answer: "The OS is likely using an older loss-based congestion control algorithm like TCP Reno, which interprets *any* packet drop as a sign of extreme network congestion, instantly cutting its congestion window (cwnd) in half.",
    explanation: "On wireless or cellular lines, drops frequently happen due to RF interference rather than router buffer queues. Loss-based TCP overreacts to these errors. Upgrading to a delay/rate-based algorithm like TCP BBR mitigates this."
  },
  {
    id: 9,
    question: "You are setting up an API client that needs to poll a server for updates. You find that setting an incredibly low connection timeout causes the client to constantly fail to connect during peak hours, even though the server is healthy. Why?",
    answer: "During peak hours, intermediate routers experience queueing delays, which inflates the Round-Trip Time (RTT). If your timeout is shorter than the combined duration of the TCP 3-way handshake under load, the client aborts prematurely.",
    explanation: "The TCP handshake requires 1.5 RTT cycles to establish a connection. If peak congestion pushes RTT from 50ms to 200ms, a strict 250ms connection timeout will kill the process before the final ACK can seal the handshake."
  },
  {
    id: 10,
    question: "A security audit shows an attacker was able to redirect all local network traffic through their own machine by sending unsolicited ARP replies to the local network switch. What is this attack, and how do you block it?",
    answer: "This is 'ARP Spoofing' (or ARP Poisoning). It can be blocked by implementing Dynamic ARP Inspection (DAI) on the managed network switches, combined with DHCP Snooping.",
    explanation: "Standard ARP has no authentication; hosts blindly update their translation tables when they receive an identity claim. DAI intercepts all local ARP packets and drops them if the MAC-to-IP binding doesn't match the switch's trusted DHCP database."
  },
  {
    id: 11,
    question: "While migrating an old internal app to an enterprise network, you find that small data packets cross fine, but transferring large 5KB database payloads causes the connection to stall or drop completely without an error code. Diagnose the issue.",
    answer: "This is an 'MTU Black Hole' issue, caused by a mismatch in the Maximum Transmission Unit (MTU) size along the path where intermediate firewalls are incorrectly dropping ICMP 'Fragmentation Needed' packets.",
    explanation: "If a packet exceeds a router's MTU and has the 'Don't Fragment' (DF) flag set, the router drops it and should send an ICMP reply. If a firewall blocks that ICMP message, the sender never learns why the data disappeared and stalls."
  },
  {
    id: 12,
    question: "A video streaming app running over HTTP/2 experiences severe stuttering for *all* active streams on a client machine the moment the client passes through a subway tunnel and drops a single data packet. Why?",
    answer: "This is caused by Transport-Layer Head-of-Line (HOL) Blocking inside TCP.",
    explanation: "HTTP/2 multiplexes many independent media streams over a single shared TCP connection. Because TCP enforces a strict sequential byte-stream order, a single missing packet stalls the delivery of *all* interleaved streams until it's recovered."
  },
  {
    id: 13,
    question: "You notice an unknown external device is flooding your web server with an astronomical number of TCP packets with only the SYN flag enabled, never following up with an ACK. What is the attack pattern and the fix?",
    answer: "This is a 'SYN Flood' DDoS attack. You can mitigate this by enabling 'SYN Cookies' in the host operating system's kernel settings.",
    explanation: "The attack attempts to consume the server's connection state queue (SYN backlog) so legitimate users can't connect. SYN Cookies encode the connection state directly into the initial sequence number, eliminating the need to allocate memory until a valid ACK arrives."
  },
  {
    id: 14,
    question: "You want to securely connect two corporate offices located in different states over the public internet so they can access each other's local servers securely. What technology do you implement, and at what layer does it operate?",
    answer: "You should implement an IPsec Site-to-Site VPN (Virtual Private Network), which operates at the Network Layer (Layer 3) of the OSI model.",
    explanation: "IPsec encapsulates and encrypts entire IP packets at the network layer. This creates a secure, transparent tunnel between the two corporate gateway routers, allowing employees to access remote office assets using standard local IP addresses."
  },
  {
    id: 15,
    question: "A malicious actor buys the domain name 'goog1e.com' and sets up a fake clone site to steal credentials. What type of attack vector is this, and how does the browser ecosystem structurally help users detect it?",
    answer: "This is a Typosquatting / Phishing attack. The browser ecosystem protects users via automated Safe Browsing APIs and strict SSL/TLS Certificate Authority verification.",
    explanation: "Even if the attacker copies the HTML perfectly, they cannot get a valid digital certificate matching the official 'google.com' domain. The browser detects the domain mismatch against the certificate fields and displays a warning screen."
  },
  {
    id: 16,
    question: "A company sets up an email server, but global providers like Gmail and Outlook constantly route their corporate emails straight into the spam folder. Assuming the content is clean, what network identifiers are missing?",
    answer: "The domain is likely missing valid SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC text records inside its public DNS settings.",
    explanation: "Receiving mail servers use DNS lookups to verify email authenticity. SPF declares which server IPs are authorized to send mail for the domain, while DKIM appends a verifiable cryptographic signature to the header to prevent spoofing."
  },
  {
    id: 17,
    question: "You are designing a low-latency financial trading system. You need to send small pricing messages to 500 distinct internal server instances concurrently. Which network routing mechanism do you configure?",
    answer: "You should configure IP Multicasting (using IGMP and multicast-enabled routers).",
    explanation: "Unicast would require sending 500 individual streams, wasting outbound bandwidth. Broadcasting would spam every device on the network segment. Multicasting sends a single stream that switches duplicate efficiently only at the relevant router forks."
  },
  {
    id: 18,
    question: "An application engineer claims that since they encrypt their data payload at the application layer using custom AES code, they do not need to use HTTPS/TLS. Is this accurate? Why or why not?",
    answer: "No, this is inaccurate. Custom payload encryption leaves vital metadata exposed, including HTTP request headers, URL paths, cookies, and authentication tokens.",
    explanation: "Application-level payload encryption only protects the explicit message body. TLS wraps the entire layer-4 connection, hiding the HTTP headers, verbs (GET/POST), and path variables from intermediate network sniffers."
  },
  {
    id: 19,
    question: "A system administrator notices that when they run a traceroute to an external server, the terminal outputs valid hop names initially, but then displays nothing but asterisks (* * *) for the final 5 hops. What is happening?",
    answer: "The destination target or its edge firewall configuration is explicitly blocking incoming ICMP Echo Requests or refusing to return ICMP Time Exceeded packets.",
    explanation: "Traceroute works by incrementally increasing the TTL field and waiting for routers to send back ICMP diagnostic packets. If a security policy drops these diagnostic responses to hide the network layout, traceroute prints asterisks due to timeouts."
  },
  {
    id: 20,
    question: "A user is connected to a public coffee shop Wi-Fi network. An attacker on the same network spins up a tool that responds to all local DHCP discovery requests faster than the shop's real router. What danger does this pose?",
    answer: "This is a 'DHCP Spoofing' attack, allowing the attacker to execute a catastrophic Man-in-the-Middle (MitM) exploit by designating their own machine as the client's Default Gateway.",
    explanation: "By providing a malicious gateway IP address during the automatic configuration lease, the victim's machine will unresolvably route all its outbound internet traffic straight to the attacker's hardware for analysis and extraction."
  }
];

export default cnScenarioBased;