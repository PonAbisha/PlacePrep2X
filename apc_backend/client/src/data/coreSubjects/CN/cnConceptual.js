const cnConceptual = [
  {
    id: 1,
    question: "Why is the OSI model used as a reference framework while the TCP/IP model is used for practical implementation?",
    answer: "The OSI model is a theoretical 7-layer framework developed before protocols were written, making it highly modular but redundant. TCP/IP was built around pre-existing, practical protocols (like TCP and IP), merging layers to reduce processing overhead.",
    explanation: "OSI strictly separates services, interfaces, and protocols. TCP/IP combines the Session, Presentation, and Application layers into a single Application layer, and combines the Data Link and Physical layers, making it more efficient for software design."
  },
  {
    id: 2,
    question: "Why does HTTP/1.1 use persistent connections with pipelining, and how does HTTP/2 solve its main bottleneck?",
    answer: "HTTP/1.1 introduced persistent connections to reuse a single TCP connection for multiple requests, but it suffers from Head-of-Line (HOL) Blocking. HTTP/2 solves this by using multiplexing to send multiple requests and responses concurrently over one connection.",
    explanation: "In HTTP/1.1 pipelining, requests must be processed in strict sequential order; if the first request is slow, all subsequent responses are blocked. HTTP/2 splits communication into interleaved, binary frames, allowing independent streams to bypass slow requests."
  },
  {
    id: 3,
    question: "What is the architectural purpose of DNS caching, and what are the security risks associated with it?",
    answer: "DNS caching temporarily stores domain-to-IP mappings closer to the user to eliminate the latency of recursive network lookups. The primary security risk is DNS Spoofing (Cache Poisoning), where a malicious actor injects false IP mappings into the cache.",
    explanation: "Without caching, every web request could trigger an expensive tree traversal across Root, TLD, and Authoritative servers. If a cache is poisoned, users are transparently redirected to fraudulent websites without their knowledge."
  },
  {
    id: 4,
    question: "Why does the Hybrid P2P architecture scale more efficiently than a traditional Client-Server model for large file distribution?",
    answer: "In a Client-Server model, the server's upload bandwidth is a fixed bottleneck shared by all clients. In a P2P architecture, every downloading peer also contributes its own upload bandwidth to the network, making aggregate capacity grow alongside demand.",
    explanation: "As the number of users increases, a client-server system degrades in performance. In P2P (like BitTorrent), more users mean more distributed copies of file pieces, which inherently speeds up distribution across the swarm."
  },
  {
    id: 5,
    question: "Why does HTTPS require asymmetric encryption during the handshake phase but shifts to symmetric encryption for data transfer?",
    answer: "Asymmetric encryption provides high security without a shared secret but is computationally heavy and slow. Symmetric encryption is extremely fast but requires a safe key exchange. Combining them provides both speed and security.",
    explanation: "The SSL/TLS handshake uses asymmetric encryption (Public/Private keys) solely to verify the server's identity and securely negotiate a unique 'Session Key'. Once this key is established, the connection switches to fast symmetric encryption."
  },
  {
    id: 6,
    question: "What is the practical difference between persistent cookies and session cookies from a network tracking perspective?",
    answer: "Session cookies are stored temporarily in volatile memory and are destroyed when the browser closes. Persistent cookies are written to the client's non-volatile storage disk with an explicit expiration date, enabling long-term cross-session tracking.",
    explanation: "Session cookies handle basic states like an active e-commerce shopping cart. Persistent cookies retain configurations like authentication login states, user preferences, and tracking behavior across days or months."
  },
  {
    id: 7,
    question: "Why are CDN (Content Delivery Network) edge servers typically deployed at the ISP level (Internet Service Providers)?",
    answer: "Deploying CDN edge nodes inside ISP networks minimizes geographical and network hop distance, reducing latency and offloading high-volume traffic from the internet backbone.",
    explanation: "By caching static content (videos, images, scripts) right at the ISP level, user requests are intercepted locally. This prevents data from traversing transit links, improving load times for the consumer and cutting network costs."
  },
  {
    id: 8,
    question: "How does the Domain Name System (DNS) use Anycast routing to handle massive DDoS attacks on Root Servers?",
    answer: "Anycast assigns the exact same IP address to multiple physical DNS servers located globally. BGP routing naturally directs requests to the topologically nearest instance, automatically distributing and isolating malicious traffic.",
    explanation: "If a botnet launches a distributed denial-of-service attack against an Anycast IP, the malicious traffic is localized to the server instances closest to the attacking bots, keeping the rest of the global server network operational."
  },
  {
    id: 9,
    question: "Why is WebSocket protocol preferred over HTTP Long Polling for real-time applications like chat rooms or stock tickers?",
    answer: "HTTP Long Polling forces the client to continually reopen new connections, causing heavy HTTP header overhead. WebSockets establish a single, permanent, full-duplex TCP connection that allows data to flow instantly in both directions.",
    explanation: "Long Polling creates high latency and wastes CPU cycles on handshake overhead. WebSockets bypass standard HTTP processing layers after an initial handshake, enabling lightweight, low-latency frame transmissions."
  },
  {
    id: 10,
    question: "What structural problem in HTTP/2 prompted the design of HTTP/3 to run over QUIC (UDP) instead of TCP?",
    answer: "HTTP/2 solved application-layer Head-of-Line blocking via multiplexing, but it still suffered from transport-layer HOL blocking. If a single TCP packet is dropped, the entire TCP connection halts until that packet is retransmitted.",
    explanation: "Because TCP treats all multiplexed streams as a single sequential byte stream, one drop stalls everything. HTTP/3 runs over QUIC (using UDP), where streams are structurally independent; a dropped packet only blocks its specific stream."
  },
  {
    id: 11,
    question: "Why is a 3-way handshake necessary to establish a TCP connection, but a 4-way handshake is required to terminate it?",
    answer: "A 3-way handshake is the minimum required to reliably synchronize sequence numbers between both sides. A 4-way handshake is needed to terminate because TCP is full-duplex, allowing one side to finish sending while the other continues.",
    explanation: "During teardown, when Client sends FIN, it only closes its own data stream. The Server responds with an ACK but can keep sending data. Once the Server finishes its tasks, it sends its own FIN, which the Client ACKs to fully close the connection."
  },
  {
    id: 12,
    question: "What is the conceptual difference between Flow Control and Congestion Control in TCP?",
    answer: "Flow Control prevents a fast sender from overwhelming a slow receiver's buffer space. Congestion Control prevents the aggregate network traffic from overwhelming the intermediate routers and links.",
    explanation: "Flow Control uses a dynamic 'Receiver Window' (rwnd) sent by the receiver. Congestion Control uses a self-calculated 'Congestion Window' (cwnd) managed by the sender using algorithms like Slow Start and Congestion Avoidance."
  },
  {
    id: 13,
    question: "Why do real-time video streaming services choose UDP over TCP despite the risk of packet loss?",
    answer: "TCP prioritizes reliability over timeliness by using retransmissions, which introduces jitter and delay. UDP prioritizes speed and immediate delivery, which is ideal for video frames where a dropped pixel is better than a frozen stream.",
    explanation: "If a packet drops in TCP, execution halts for a retransmission loop (HOL blocking). In live video, old data is useless. UDP drops the late frame and displays the next current frame immediately, maintaining smooth timing."
  },
  {
    id: 14,
    question: "How does the TCP Fast Retransmit mechanism improve connection throughput compared to standard Timeout policies?",
    answer: "Fast Retransmit allows a sender to detect packet loss before its recovery timer expires by watching for three duplicate ACKs for the same expected packet sequence.",
    explanation: "If a sender receives an ACK followed by 3 duplicate ACKs for packet 'N', it assumes packet 'N' was lost in transit even if the retransmission timer is still ticking, allowing immediate repair and preventing execution stalls."
  },
  {
    id: 15,
    question: "Why does the Selective Repeat (SR) sliding window protocol require smaller buffer sizes and less overhead than Go-Back-N (GBN)?",
    answer: "Selective Repeat only retransmits the exact frames that were corrupted or lost, whereas Go-Back-N discards all frames following a gap and forces a full retransmission from the point of error.",
    explanation: "GBN simplifies the receiver since it doesn't buffer out-of-order frames, but it wastes massive bandwidth on clean lines. SR buffers out-of-order packets individually, saving network capacity at the cost of memory at both ends."
  },
  {
    id: 16,
    question: "What is the purpose of the TIME_WAIT state in a TCP connection lifecycle, and why does it typically last for 2 MSL?",
    answer: "TIME_WAIT ensures that delayed packets from the old connection dissipate from the routing network completely, and it guarantees that the final ACK reached the remote server successfully.",
    explanation: "If the final ACK is lost, the server will retransmit its FIN. If the client closed instantly without TIME_WAIT, a new connection on that same port would receive that old FIN frame, causing an accidental termination."
  },
  {
    id: 17,
    question: "How does Silly Window Syndrome degrade network performance, and how does Nagle's Algorithm mitigate it?",
    answer: "Silly Window Syndrome occurs when data is sent or read in tiny chunks (e.g., 1 byte), causing massive header overhead. Nagle's Algorithm fixes this by buffering small outbound data blocks until a full-sized segment can be sent.",
    explanation: "Sending 1 byte of user data requires a 20-byte IP header and a 20-byte TCP header (4000% overhead). Nagle's rule blocks further small writes until outstanding ACKs arrive, naturally batching characters into larger packets."
  },
  {
    id: 18,
    question: "Why does TCP use an Exponential Backoff policy for its retransmission timeout (RTO) calculations during heavy congestion?",
    answer: "Exponential backoff doubles the timeout value after every consecutive failure, preventing a congested network from being flooded by endless loops of aggressive retransmission packets.",
    explanation: "If a router drops a packet due to a buffer overflow, immediate retransmissions make the clog worse. Doubling the wait time gives intermediate switches space to clear their packet queues safely."
  },
  {
    id: 19,
    question: "What is the primary operational difference between TCP BBR and traditional loss-based congestion control algorithms like Reno or Cubic?",
    answer: "Loss-based algorithms assume network congestion only when packets are dropped. BBR models the actual bottleneck bandwidth and round-trip propagation times to prevent buffers from filling up in the first place.",
    explanation: "Cubic fills network buffers until they overflow, causing high latency ('bufferbloat'). BBR operates at the optimal point where throughput is maxed out and delay is minimized, adjusting rates without needing packet drops to self-correct."
  },
  {
    id: 20,
    question: "Why are pseudo-headers used during the computation of TCP and UDP checksums?",
    answer: "Pseudo-headers include critical fields from the network layer (Source/Destination IP, Protocol type) to catch misrouted packets caused by corruption in intermediate IP headers.",
    explanation: "Even though the IP layer has its own checksum, errors can occur inside routers. Including IP addresses in the transport layer checksum ensures a packet won't be delivered to the wrong process if its destination routing changes mid-flight."
  },
  {
    id: 21,
    question: "Why does IPv6 eliminate the checksum field from its network packet header when IPv4 explicitly mandates it?",
    answer: "IPv6 cuts out the layer-3 checksum to optimize router performance, leaving error checking to the highly reliable Data Link (layer 2) and Transport (layer 4) protocols.",
    explanation: "In IPv4, every router along a path must decrement the TTL field and recalculate the IP checksum, creating processing latency. Dropping the checksum allows routers to process and forward packets much faster."
  },
  {
    id: 22,
    question: "What is the architectural difference between Link-State (OSPF) and Distance-Vector (RIP) routing algorithms?",
    answer: "Link-State algorithms require every router to hold a complete map of the entire network topology. Distance-Vector algorithms operate blindly, with routers only knowing estimates of total costs to destinations via immediate neighbors.",
    explanation: "OSPF uses Dijkstra's algorithm on a global map, converging rapidly with low risk of loops. RIP uses the Bellman-Ford algorithm based on neighbor gossip, which can cause slow convergence and the 'Count-to-Infinity' problem."
  },
  {
    id: 23,
    question: "Why can't an IP address be mapped directly to hardware without using the Address Resolution Protocol (ARP) inside a local network?",
    answer: "IP addresses are logical structures managed by software for global end-to-end routing, whereas network interface cards (NICs) only understand physical MAC addresses to deliver frames within a local link.",
    explanation: "Routers forward packets across the internet using IP paths. However, once a packet arrives at the final destination network, it must be wrapped in a layer-2 Ethernet frame, which requires ARP to resolve the target's physical MAC address."
  },
  {
    id: 24,
    question: "What is the structural difference between a Network Switch (Layer 2) and a Router (Layer 3) regarding collision and broadcast domains?",
    answer: "A switch splits a network into independent collision domains per port but maintains one large broadcast domain. A router separates networks into both distinct collision domains and distinct broadcast domains.",
    explanation: "Switches forward frames using MAC address tables and flood broadcast packets to all ports. Routers block layer-2 broadcasts completely, using IP routing tables to isolate local network domains from each other."
  },
  {
    id: 25,
    question: "Why do wireless networks utilize CSMA/CA (Collision Avoidance) instead of the wired Ethernet standard CSMA/CD (Collision Detection)?",
    answer: "Wireless radios cannot transmit and listen on the same channel simultaneously, meaning they cannot detect a collision while sending. They use avoidance tactics instead to prevent overlaps.",
    explanation: "This limitation is known as the 'Hidden Terminal Problem'. A wireless node cannot detect if its transmission is colliding with another node's signal at the receiver end, requiring explicit RTS/CTS handshakes to reserve airtime."
  },
  {
    id: 26,
    question: "How does Network Address Translation (NAT) present a structural challenge to peer-to-peer (P2P) networking, and how is it bypassed?",
    answer: "NAT prevents external systems from initiating direct inbound connections to a private IP address behind a router. P2P systems bypass this restriction using hole-punching techniques like STUN or TURN servers.",
    explanation: "NAT maps outbound ports to internal private addresses dynamically. Since external peers cannot address a private space directly, STUN servers help peers discover their public-facing IP mappings to establish a direct connection path."
  },
  {
    id: 27,
    question: "Why do IP packets require a Time-to-Live (TTL) or Hop Limit field in their headers?",
    answer: "The TTL field prevents dropped or misrouted packets from circulating infinitely within routing loops, which would eventually consume all available network bandwidth.",
    explanation: "Every router that forwards an IP packet decrements its TTL value by 1. If the TTL drops to 0, the router discards the packet and sends an ICMP 'Time Exceeded' message back to the original sender (which is how traceroute works)."
  },
  {
    id: 28,
    question: "What is the purpose of the Count-to-Infinity problem in routing, and how does Split Horizon mitigate it?",
    answer: "The problem occurs when a link fails, and distance-vector routers pass outdated routing entries back and forth, slowly incrementing hop counts indefinitely. Split Horizon prevents a router from advertising a route back to the neighbor it learned it from.",
    explanation: "If Router A learns about a path from Router B, Split Horizon stops Router A from advertising that same path back to Router B. This breaks simple routing loops and speeds up network convergence times when links drop."
  },
  {
    id: 29,
    question: "Why does the Data Link Layer use bit-stuffing or byte-stuffing techniques when packaging data frames?",
    answer: "Stuffing keeps the frame boundaries distinct by escaping any accidental appearances of the reserved 'Flag' sequence inside the actual user data payload.",
    explanation: "If a flag character (like `01111110`) appears inside a file, the receiver hardware would misinterpret it as the end of the frame. Stuffing modifies the data pattern dynamically during transmission and strips it at the receiving end."
  },
  {
    id: 30,
    question: "What is the structural value of a Virtual Local Area Network (VLAN) in an enterprise network topology?",
    answer: "VLANs allow network engineers to segment a physical switch into distinct, logical networks without buying separate hardware, reducing broadcast overhead and improving security.",
    explanation: "Even if devices are plugged into the same physical switch hardware, grouping them into separate VLANs isolates their broadcast traffic. Communication between different VLANs is blocked unless routed through a layer-3 device."
  }
];
export default cnConceptual;