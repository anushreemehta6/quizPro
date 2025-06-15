// server/data/dccn.js

module.exports = {
    easy: [
      { question: "What does DCCN stand for?", options: ["Data Communication and Computer Network", "Digital Computing and Control Network", "Data Control and Communication Next", "None"], answer: "Data Communication and Computer Network" },
      { question: "Which device forwards packets between networks?", options: ["Switch", "Router", "Hub", "Bridge"], answer: "Router" },
      { question: "What is bandwidth?", options: ["Data transfer rate", "Signal strength", "Frequency", "Latency"], answer: "Data transfer rate" },
      { question: "Which layer of OSI handles routing?", options: ["Network layer", "Transport layer", "Session layer", "Application layer"], answer: "Network layer" },
      { question: "What is a MAC address?", options: ["Physical address", "Logical address", "IP address", "Port number"], answer: "Physical address" },
      { question: "Which protocol is used to send email?", options: ["SMTP", "HTTP", "FTP", "TELNET"], answer: "SMTP" },
      { question: "What does TCP stand for?", options: ["Transmission Control Protocol", "Transport Connection Protocol", "Transfer Control Protocol", "None"], answer: "Transmission Control Protocol" },
      { question: "What is the purpose of a switch?", options: ["Divide collision domain", "Multiply collision domain", "Connect to internet", "Store data"], answer: "Divide collision domain" },
      { question: "Which topology has a central node with all link connections?", options: ["Star", "Ring", "Mesh", "Bus"], answer: "Star" },
      { question: "What is latency?", options: ["Delay in transmission", "Bandwidth", "Throughput", "Signal strength"], answer: "Delay in transmission" }
    ],
  
    medium: [
      { question: "What is subnetting used for?", options: ["Divide networks into sub-networks", "Combine networks", "Encrypt data", "None"], answer: "Divide networks into sub-networks" },
      { question: "Which protocol provides no guarantee of delivery?", options: ["TCP", "UDP", "HTTP", "FTP"], answer: "UDP" },
      { question: "What is the default port for HTTP?", options: ["80", "21", "443", "25"], answer: "80" },
      { question: "Which layer handles end-to-end communication?", options: ["Transport layer", "Session layer", "Network layer", "Data link layer"], answer: "Transport layer" },
      { question: "What is ARP used for?", options: ["Map IP to MAC", "Map MAC to IP", "Routing", "Encryption"], answer: "Map IP to MAC" },
      { question: "Which protocol is connection-oriented?", options: ["TCP", "UDP", "ICMP", "IP"], answer: "TCP" },
      { question: "What does DNS do?", options: ["Translate domain to IP", "Encrypt data", "Route packets", "Store data"], answer: "Translate domain to IP" },
      { question: "Which device works at OSI layer 2?", options: ["Switch", "Router", "Hub", "Gateway"], answer: "Switch" },
      { question: "What is CSMA/CD?", options: ["Carrier Sense Multiple Access with Collision Detection", "Carrier Sense Multiple Access with Collision Delay", "Multiple Access with Collision Detection", "None"], answer: "Carrier Sense Multiple Access with Collision Detection" },
      { question: "What is a virtual circuit?", options: ["Logical connection", "Physical connection", "VPN", "None"], answer: "Logical connection" }
    ],
  
    hard: [
      { question: "What is the three-way handshake in TCP?", options: ["SYN, SYN-ACK, ACK", "SYN, ACK, SYN-ACK", "ACK, SYN, ACK", "None"], answer: "SYN, SYN-ACK, ACK" },
      { question: "Which protocol ensures reliable multicast?", options: ["TCP", "UDP", "PIM", "RTP"], answer: "RTP" },
      { question: "What is MTU?", options: ["Maximum Transmission Unit", "Minimum Transmission Unit", "Maximum Transfer Unit", "None"], answer: "Maximum Transmission Unit" },
      { question: "Which algorithm is used in OSPF routing?", options: ["Dijkstra’s algorithm", "Bellman-Ford", "Distance Vector", "Link State"], answer: "Dijkstra’s algorithm" },
      { question: "What is the purpose of ICMP?", options: ["Error reporting", "Routing", "Encryption", "Addressing"], answer: "Error reporting" },
      { question: "Which TCP flag indicates urgent data?", options: ["URG", "ACK", "SYN", "FIN"], answer: "URG" },
      { question: "What is sliding window protocol used for?", options: ["Flow control", "Routing", "Addressing", "Error detection"], answer: "Flow control" },
      { question: "What is route poisoning?", options: ["Advertise invalid routes", "Poison the network", "Encrypt data", "None"], answer: "Advertise invalid routes" },
      { question: "Which layer does SSL/TLS operate on?", options: ["Transport layer", "Application layer", "Network layer", "Data link layer"], answer: "Transport layer" },
      { question: "What is the difference between stateful and stateless firewall?", options: ["Stateful tracks connections, stateless does not", "Stateless tracks connections, stateful does not", "Both same", "None"], answer: "Stateful tracks connections, stateless does not" }
    ]
  };
  