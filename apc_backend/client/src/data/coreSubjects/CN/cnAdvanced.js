const cnAdvanced = [
  {
    id: 1,
    question: "How does the BGP (Border Gateway Protocol) prevent routing loops across the global internet infrastructure since it does not use a link-state database?",
    answer: "BGP is a Path-Vector routing protocol. It prevents loops by appending every Autonomous System Number (ASN) it traverses to the 'AS_PATH' attribute inside the routing update packet.",
    explanation: "When a border router receives a BGP advertisement, it inspects the AS_PATH array. If it detects its own local ASN already present in the list, it immediately rejects the route update, preventing a global loop."
  },
  {
    id: 2,
    question: "What is the 'TCP Meltdown' phenomenon when running a TCP connection inside a TCP-based VPN tunnel?",
    answer: "TCP Meltdown occurs when the inner TCP application connection and the outer TCP VPN transport connection both try to run error-correction algorithms simultaneously over a lossy link.",
    explanation: "When a packet drops, both layers try to retransmit and back off their timers exponentially. This creates a compounding loop of retransmissions that causes queues to explode and throughput to collapse completely."
  },
  {
    id: 3,
    question: "Explain the architectural mechanics of Anycast DNS routing and how it handles TCP connection state given that Anycast addresses can route packets to different physical servers.",
    answer: "Anycast assigns the same IP address to multiple geographically distributed servers using BGP. While great for stateless UDP DNS lookups, if a topology change occurs mid-session during a TCP zone transfer, subsequent packets will route to a different physical server, breaking the connection.",
    explanation: "Because routers route packet-by-packet based on cost, an AS-path shift mid-stream ruins stateful connections. Advanced setups bypass this by using Anycast only for the initial handshake/discovery, or keeping the BGP paths completely stable."
  },
  {
    id: 4,
    question: "How do modern Linux kernels utilize eBPF (Extended Berkeley Packet Filter) and XDP (eXpress Data Path) to mitigate high-volume DDoS attacks before they hit the networking stack?",
    answer: "XDP allows custom eBPF programs to execute directly on the network interface card (NIC) driver layer, dropping or rewriting malicious packets before the kernel allocates an 'sk_buff' memory structure.",
    explanation: "Standard firewalls process packets after the kernel spends CPU cycles creating network data structures. XDP intercepts packets at the lowest software layer, allowing a single server to drop millions of malicious frames per second without spiking CPU usage."
  },
  {
    id: 5,
    question: "What is the structural cause of 'Bufferbloat' in modern networks, and how does the CoDel (Controlled Delay) AQM algorithm resolve it?",
    answer: "Bufferbloat occurs when oversized buffers in intermediate routers remain continuously full over high-bandwidth links, adding massive queueing latency to packets without triggering standard TCP drop-recovery metrics.",
    explanation: "CoDel tracks how long packets sit at the head of the queue. If the minimum delay remains higher than a set threshold (e.g., 5ms) over a moving window, it determines the buffer is bloated and drops packets to force TCP to slow down."
  },
  {
    id: 6,
    question: "Why do high-throughput storage networks prefer RoCE (RDMA over Converged Ethernet) over traditional TCP/IP stacks for data centers?",
    answer: "RoCE utilizes Remote Direct Memory Access (RDMA) to allow one server's network adapter to read/write memory from a remote server directly, bypassing the operating system kernel and CPU entirely.",
    explanation: "TCP/IP requires copying data from the NIC to kernel space, then to user space, consuming CPU cycles and adding latency. RoCE moves data hardware-to-hardware, achieving sub-microsecond latencies and massive throughput."
  },
  {
    id: 7,
    question: "What is the 'Karn's Algorithm' adjustment in TCP retransmission timeout (RTO) estimation, and why is it mathematically critical over unstable links?",
    answer: "Karn's Algorithm states that when calculating the Round-Trip Time (RTT) variance, the sender must ignore the RTT samples of any packets that had to be retransmitted.",
    explanation: "If a packet is retransmitted, the sender cannot tell if the incoming ACK belongs to the first copy or the second copy (Ambiguity Problem). Including these flawed samples corrupts the RTO math, making it unsafely low or high."
  },
  {
    id: 8,
    question: "Explain the mechanism of a TLS 1.3 Zero-RTT (0-RTT) resumption handshake and the specific security exploit vectors it opens up.",
    answer: "0-RTT allows a returning client to bundle encrypted application data directly inside its initial client-hello packet using cached session keys. The critical flaw is that it is highly vulnerable to Replay Attacks.",
    explanation: "Since the first packet contains both the connection initiation and the encrypted data command (e.g., 'Pay $10'), an eavesdropper can capture that raw packet and replay it to the server multiple times to duplicate the action."
  },
  {
    id: 9,
    question: "How does the QUIC protocol handle Connection Migration when a mobile device transitions from a Wi-Fi network to a 5G cellular network without dropping active streams?",
    answer: "QUIC abstracts connections using a unique 64-bit 'Connection ID' in its header instead of relying on the traditional network 4-tuple (Source IP, Source Port, Dest IP, Dest Port).",
    explanation: "When a device changes networks, its IP address shifts, which instantly kills a standard TCP socket. Because QUIC validates via the Connection ID, the server reads the payload unchanged and updates the routing path seamlessly."
  },
  {
    id: 10,
    question: "What is the 'Count-to-Infinity' problem in Distance-Vector routing, and how does Route Poisoning resolve it more effectively than simple Split Horizon?",
    answer: "The problem occurs when a link drops and two routers continuously increase their hop metrics to that target based on outdated info. Route Poisoning stops this by instantly setting the metric to an 'infinity' value (e.g., 16 hops in RIP) when a link dies.",
    explanation: "Split Horizon simply prevents sending data back to the source. Route Poisoning actively advertises the broken path as completely dead right away, forcing the entire network to flush the bad route immediately."
  },
  {
    id: 11,
    question: "Explain the explicit functional difference between Implicit Congestion Notification (loss-based) and Explicit Congestion Notification (ECN) at the IP layer.",
    answer: "Implicit systems require packets to be dropped by overflowing router queues before a sender reacts. ECN uses two bits in the IPv4/IPv6 TOS header to let a router mark packets as 'Congestion Experienced' without dropping them.",
    explanation: "When an ECN-marked packet reaches the destination, the receiver mirrors this warning flag back to the sender in its next TCP ACK. This allows the sender to throttle its transmission rate *before* buffers overflow, eliminating packet loss."
  },
  {
    id: 12,
    question: "Why does the HTTP/2 HPACK compression protocol use an explicitly bounded dynamic table alongside static Huffman encoding to compress headers?",
    answer: "HPACK prevents 'CRIME' style cryptographic attacks by avoiding open-ended compression strings while drastically reducing redundancy by caching previously seen header fields in a rolling session index.",
    explanation: "Many headers (like user-agent or authorization tokens) are identical across requests. Storing these strings in a dynamic state table allows subsequent requests to represent huge text lines with a simple, tiny integer index pointer."
  },
  {
    id: 13,
    question: "What is the purpose of GSO (Generic Segmentation Offload) and GRO (Generic Receive Offload) inside modern kernel networking paths?",
    answer: "GSO and GRO defer the heavy work of splitting data streams into individual MTU-sized packets from the main OS kernel CPU to the network adapter hardware (NIC).",
    explanation: "With GRO, the NIC batches multiple incoming packets into a single massive buffer frame before interrupting the CPU. This lowers the number of hardware interrupts the CPU must handle, significantly increasing network processing efficiency."
  },
  {
    id: 14,
    question: "How does BFD (Bidirectional Forwarding Detection) improve routing convergence times compared to standard OSPF or BGP keepalive timers?",
    answer: "Standard routing protocols use hello timers that take seconds to detect a link failure. BFD runs low-overhead fault detection independently at the millisecond layer between directly connected routing systems.",
    explanation: "BFD session checks can run every 10-50ms. If a path breaks, BFD detects it instantly and triggers a notification to OSPF or BGP, causing them to re-route traffic within milliseconds instead of waiting for a 90-second timeout."
  },
  {
    id: 15,
    question: "Explain why a WebSocket upgrade request can sometimes fail or get dropped when passing through older enterprise corporate proxy servers.",
    answer: "Older proxies do not understand the 'Upgrade: websocket' and 'Connection: Upgrade' HTTP headers, attempting to treat the persistent WebSocket tunnel as a standard, short-lived HTTP request-response cycle.",
    explanation: "When the proxy sees continuous data flowing instead of clean HTTP syntax, it flags the long connection as a protocol violation and forcefully terminates the socket. Encrypting traffic via WSS (WebSockets Secure) bypasses this by hiding headers."
  },
  {
    id: 16,
    question: "What is the architectural purpose of a VXLAN (Virtual Extensible LAN) overlay network in modern software-defined data centers?",
    answer: "VXLAN resolves the 4096 VLAN limit constraint by introducing a 24-bit segment identifier, allowing up to 16 million logical networks to operate concurrently over a shared layer-3 cloud.",
    explanation: "It encapsulates layer-2 Ethernet frames inside standard layer-4 UDP packets. This allows multi-tenant cloud servers to migrate virtual machines across different physical subnets without changing their internal layer-2 configurations."
  },
  {
    id: 17,
    question: "How does the Nagle's Algorithm interact with the TCP Delayed ACK mechanism to cause a devastating 200ms latency trap in application architectures?",
    answer: "Nagle's waits for a full packet write or an outstanding ACK. Delayed ACK holds back ACKs for up to 200ms hoping to hitch a ride on outbound data. Together, they create a mutual deadlock where both sides wait indefinitely.",
    explanation: "If an app sends a small write followed by another small write, Nagle blocks the second write until the first is ACKed. But the receiver won't send an ACK because of Delayed ACK rules. The line freezes until the 200ms timeout expires."
  },
  {
    id: 18,
    question: "What structural vulnerability does the DNSSEC (DNS Security Extensions) framework introduce regarding network reflection and amplification attacks?",
    answer: "DNSSEC attaches large cryptographic public keys and digital signatures (RRSIG records) to DNS entries, which drastically inflates the size of the UDP response packet.",
    explanation: "An attacker spoofing a victim's IP can send a tiny 40-byte request to an open DNS resolver asking for a DNSSEC record. The resolver returns a massive 4000-byte signed packet to the victim, amplifying the attack traffic by a factor of 100x."
  },
  {
    id: 19,
    question: "Explain the operational differences between symmetric and asymmetric routing across multi-homed ISP connections and the engineering risks involved.",
    answer: "Symmetric routing means outbound and inbound packets use the same link. Asymmetric routing occurs when outbound traffic exits via ISP A but returning traffic enters via ISP B.",
    explanation: "While common on the internet, asymmetric routing will fail catastrophically if stateful firewalls are deployed on the endpoints. If Firewall B sees a returning 'SYN-ACK' packet without ever seeing the initial outbound 'SYN', it drops it as a suspected attack."
  },
  {
    id: 20,
    question: "How does the TCP Cubic algorithm adapt its congestion control curves differently from classic TCP Reno when working over high-speed Gigabit satellite links?",
    answer: "TCP Reno grows its window linearly based on receiving ACKs. TCP Cubic calculates its growth window using a cubic mathematical function based on the elapsed time since the last packet drop event.",
    explanation: "On paths with high bandwidth and long delays, Reno takes hours to scale back up to full speed after a single drop. Cubic scales its window aggressively based on real-time elapsed intervals, reclaiming maximum line speed much faster."
  }
];

export default cnAdvanced;