const cnFundamentals = [
{
id: 1,
question: "What is a Computer Network?",
answer: "A Computer Network is a collection of interconnected devices that communicate and share resources.",
explanation: "Networks enable data sharing, communication, and resource utilization among connected systems."
},
{
id: 2,
question: "What are the main types of Computer Networks?",
answer: "LAN, MAN, WAN, PAN, and CAN.",
explanation: "They are classified based on geographical coverage and usage."
},
{
id: 3,
question: "What is a Network Protocol?",
answer: "A protocol is a set of rules that governs communication between devices.",
explanation: "Protocols define how data is transmitted, received, and interpreted."
},
{
id: 4,
question: "What is the TCP/IP Model?",
answer: "The TCP/IP Model is a networking framework consisting of Application, Transport, Internet, and Network Access layers.",
explanation: "It is the foundation of modern Internet communication."
},
{
id: 5,
question: "What is the OSI Model?",
answer: "The OSI Model is a seven-layer conceptual framework for network communication.",
explanation: "The layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application."
},
{
id: 6,
question: "What is a Router?",
answer: "A Router is a networking device that forwards packets between different networks.",
explanation: "It operates at the Network Layer and uses IP addresses for routing."
},
{
id: 7,
question: "What is a Switch?",
answer: "A Switch is a networking device that connects devices within the same network.",
explanation: "It operates at the Data Link Layer and uses MAC addresses to forward frames."
},
{
id: 8,
question: "What is a Hub?",
answer: "A Hub is a basic networking device that broadcasts data to all connected devices.",
explanation: "Unlike a switch, it does not filter traffic and is less efficient."
},
{
id: 9,
question: "What is a MAC Address?",
answer: "A MAC Address is a unique hardware address assigned to a network interface card.",
explanation: "It is used for communication within a local network."
},
{
id: 10,
question: "What is an IP Address?",
answer: "An IP Address is a logical address assigned to a device on a network.",
explanation: "It uniquely identifies devices and enables communication over networks."
},
{
id: 11,
question: "What is Network Topology?",
answer: "Network Topology refers to the arrangement of devices and communication links in a network.",
explanation: "It defines how devices are connected and communicate with each other."
},
{
id: 12,
question: "What are the different types of Network Topologies?",
answer: "Bus, Star, Ring, Mesh, Tree, and Hybrid.",
explanation: "Each topology has its own advantages and disadvantages in terms of cost, scalability, and fault tolerance."
},
{
id: 13,
question: "What is Transmission Mode?",
answer: "Transmission Mode defines the direction of data flow between communicating devices.",
explanation: "The three main transmission modes are Simplex, Half-Duplex, and Full-Duplex."
},
{
id: 14,
question: "What is the difference between Simplex, Half-Duplex, and Full-Duplex communication?",
answer: "Simplex allows one-way communication, Half-Duplex allows two-way communication but one direction at a time, and Full-Duplex allows simultaneous two-way communication.",
explanation: "Examples include Radio (Simplex), Walkie-Talkie (Half-Duplex), and Telephone (Full-Duplex)."
},
{
id: 15,
question: "What is Bandwidth?",
answer: "Bandwidth is the maximum amount of data that can be transmitted over a network in a given period of time.",
explanation: "It is usually measured in bits per second (bps), Mbps, or Gbps."
},
{
id: 16,
question: "What is Latency?",
answer: "Latency is the time taken for a data packet to travel from source to destination.",
explanation: "Lower latency results in faster communication and better network performance."
},
{
id: 17,
question: "What is Throughput?",
answer: "Throughput is the actual amount of data successfully transmitted over a network in a given time.",
explanation: "It is often lower than bandwidth due to network congestion and overhead."
},
{
id: 18,
question: "What is Unicast Communication?",
answer: "Unicast is a one-to-one communication method where data is sent from one sender to one receiver.",
explanation: "Most Internet communications such as web browsing use unicast transmission."
},
{
id: 19,
question: "What is Broadcast Communication?",
answer: "Broadcast is a one-to-all communication method where data is sent to all devices in a network.",
explanation: "Devices decide whether to process or ignore the broadcast message."
},
{
id: 20,
question: "What is Multicast Communication?",
answer: "Multicast is a one-to-many communication method where data is sent only to a specific group of devices.",
explanation: "It reduces network traffic by delivering data only to interested receivers."
},
  {
    id: 21,
    question: "What is Guided Media in computer networks?",
    answer: "Guided Media (or bounded media) refers to physical communication transmission paths where data signals are directed and confined within a solid, tangible medium.",
    explanation: "Examples include copper wires and fiber-optic cables. Because the signal is contained within a physical boundary, it is generally more secure and less prone to external interference than open-air transmissions."
  },
  {
    id: 22,
    question: "What is a Twisted Pair Cable, and why are the wires twisted together?",
    answer: "A Twisted Pair Cable consists of pairs of insulated copper wires twisted around each other. The twisting mechanism cancels out electromagnetic interference (EMI) and cross-talk from neighboring pairs.",
    explanation: "It is widely used in Ethernet networks (such as Cat5e and Cat6 cables). Twisting ensures that both wires receive the same amount of external noise, allowing the receiver to subtract the noise effectively using differential signaling."
  },
  {
    id: 23,
    question: "What is a Coaxial Cable, and where is it structurally applied?",
    answer: "A Coaxial Cable features a central solid copper conductor surrounded by an insulating layer, a metallic shield layer to block high-frequency noise, and an outer protective jacket.",
    explanation: "Its structural shielding allows it to carry high-frequency signals with low distortion, making it perfect for cable television distribution, broadband internet connections, and legacy thinnet networks."
  },
  {
    id: 24,
    question: "How does an Optical Fiber cable transmit data over long distances?",
    answer: "Optical Fiber transmits data as pulses of light through a glass or plastic core based on the optical principle of Total Internal Reflection (TIR).",
    explanation: "A thin glass core is surrounded by a cladding layer with a lower refractive index. Light injected at a specific angle bounces cleanly down the core, offering massive bandwidth, zero EMI susceptibility, and very low signal attenuation over kilometers."
  },
  {
    id: 25,
    question: "What is Unguided Media?",
    answer: "Unguided Media (or unbounded media) refers to wireless communication channels that transport electromagnetic waves across the open air, water, or vacuum without using physical cables.",
    explanation: "Signals are broadcast in all directions or focused in tight paths through space. Devices utilize antennas to transmit and receive data over varying spectrum bands, making it essential for cellular, Wi-Fi, and satellite systems."
  },
  {
    id: 26,
    question: "What are Radio Waves, and what are their primary transmission characteristics?",
    answer: "Radio Waves are low-frequency electromagnetic waves (ranging from 3 kHz to 1 GHz) that are omnidirectional, meaning they travel in all directions from a source antenna.",
    explanation: "Because they are omnidirectional, the sender and receiver do not need physical line-of-sight alignment. They can also pass through solid walls easily, making them ideal for FM radio, television broadcasts, and mobile phone data."
  },
  {
    id: 27,
    question: "What are Microwaves, and how do they differ from Radio Waves?",
    answer: "Microwaves occupy a higher frequency spectrum (1 GHz to 300 GHz) and are strictly unidirectional, requiring a clear, unobstructed line-of-sight path between parabolic antennas.",
    explanation: "Unlike radio waves, microwaves cannot penetrate solid obstacles easily. They focus energy into narrow, concentrated beams, allowing high-capacity data transfers across long distances, such as tower-to-tower terrestrial links."
  },
  {
    id: 28,
    question: "What is Infrared transmission, and what is its main limitation?",
    answer: "Infrared uses high-frequency light waves (300 GHz to 400 THz) for short-range wireless data communication. Its main limitation is that it cannot pass through solid walls or handle sunlight interference.",
    explanation: "Because it is completely blocked by physical barriers, it provides excellent localized security against eavesdropping. It is primarily used in consumer devices like TV remote controls, wireless mice, and short-range sensors."
  },
  {
    id: 29,
    question: "How does Satellite Communication facilitate global data distribution?",
    answer: "Satellite Communication uses spaceborne transponders acting as microwave relay stations to receive signals from a ground station, amplify them, and broadcast them back to distant earth antennas.",
    explanation: "Satellites positioned in Geostationary Earth Orbit (GEO) rotate at the same speed as Earth, appearing stationary over one spot. This enables broad geographical coverage, making it perfect for global GPS tracking, maritime communications, and satellite internet."
  },
  {
    id: 30,
    question: "What is the core conceptual comparison between Guided and Unguided Media?",
    answer: "Guided media relies on physical physical pipelines (cables) offering stable, high-speed, secure connections with minimal interference. Unguided media relies on open airspace, offering flexible mobility and easier installation at the cost of vulnerability to noise and weather.",
    explanation: "Guided media is limited by physical routing infrastructure and installation costs over tough terrain. Unguided media scales easily to mobile devices but must contend with dynamic signal attenuation, path loss, and stricter spectrum regulations."
  },
{
id: 31,
question: "What is TCP?",
answer: "TCP (Transmission Control Protocol) is a reliable, connection-oriented transport layer protocol.",
explanation: "It ensures ordered and error-free delivery of data."
},
{
id: 32,
question: "What is UDP?",
answer: "UDP (User Datagram Protocol) is a connectionless transport layer protocol.",
explanation: "It provides faster communication but does not guarantee delivery."
},
{
id: 33,
question: "What is the difference between TCP and UDP?",
answer: "TCP is reliable and connection-oriented, while UDP is faster and connectionless.",
explanation: "TCP is used for web browsing and email, whereas UDP is used for streaming and gaming."
},
{
id: 34,
question: "What is the Three-Way Handshake in TCP?",
answer: "It is the process used to establish a TCP connection using SYN, SYN-ACK, and ACK messages.",
explanation: "It ensures both sender and receiver are ready to communicate."
},
{
id: 35,
question: "What is Flow Control?",
answer: "Flow Control prevents a sender from overwhelming a receiver with too much data.",
explanation: "TCP uses the Sliding Window mechanism for flow control."
},
{
id: 36,
question: "What is Error Control?",
answer: "Error Control detects and corrects transmission errors.",
explanation: "TCP uses acknowledgments and retransmissions to ensure reliable delivery."
},
{
id: 37,
question: "What is Congestion Control?",
answer: "Congestion Control prevents excessive traffic from overloading the network.",
explanation: "TCP uses algorithms such as Slow Start and Congestion Avoidance."
},
{
id: 38,
question: "What is DNS?",
answer: "DNS (Domain Name System) translates domain names into IP addresses.",
explanation: "It allows users to access websites using names instead of numeric IP addresses."
},
{
id: 39,
question: "What is DHCP?",
answer: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices.",
explanation: "It simplifies network administration and IP management."
},
{
id: 40,
question: "What is ARP?",
answer: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses.",
explanation: "It helps devices communicate within a local network."
},
{
id: 41,
question: "What is Routing?",
answer: "Routing is the process of selecting the best path for data packets to travel across networks.",
explanation: "Routers use routing tables and protocols to determine packet paths."
},
{
id: 42,
question: "What is a Routing Table?",
answer: "A Routing Table stores information about available network routes.",
explanation: "Routers consult routing tables to forward packets efficiently."
},
{
id: 43,
question: "What is Static Routing?",
answer: "Static Routing uses manually configured routes.",
explanation: "It is simple but requires manual maintenance."
},
{
id: 44,
question: "What is Dynamic Routing?",
answer: "Dynamic Routing automatically updates routes using routing protocols.",
explanation: "It adapts to network changes without manual intervention."
},
{
id: 45,
question: "What is RIP?",
answer: "RIP (Routing Information Protocol) is a distance-vector routing protocol.",
explanation: "It uses hop count as its routing metric."
},
{
id: 46,
question: "What is OSPF?",
answer: "OSPF (Open Shortest Path First) is a link-state routing protocol.",
explanation: "It calculates the shortest path using Dijkstra's algorithm."
},
{
id: 47,
question: "What is Network Address Translation (NAT)?",
answer: "NAT allows multiple devices to share a single public IP address.",
explanation: "It conserves IPv4 addresses and improves security."
},
{
id: 48,
question: "What is a Firewall?",
answer: "A Firewall is a security system that monitors and controls network traffic.",
explanation: "It blocks unauthorized access while allowing legitimate communication."
},
{
id: 49,
question: "What is a Proxy Server?",
answer: "A Proxy Server acts as an intermediary between a client and a server.",
explanation: "It improves security, caching, and anonymity."
},
{
id: 50,
question: "What is a VPN?",
answer: "A VPN (Virtual Private Network) creates a secure encrypted connection over a public network.",
explanation: "It protects user privacy and secures data transmission."
}

];

export default cnFundamentals;
