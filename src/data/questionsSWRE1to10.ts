import { Question } from '../types/quiz.ts';

// Questions, answer choices, answer keys, and explanations compiled from the ten supplied module quiz files.
export const SWRE_MODULES_1_TO_10_QUESTIONS: Question[] = [
  {
    "question": "Which tasks can be accomplished by using the command history feature? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Set the command history buffer size."
      },
      {
        "id": "b",
        "text": "Recall previously entered commands."
      },
      {
        "id": "c",
        "text": "View a list of commands entered in a previous session."
      },
      {
        "id": "d",
        "text": "Recall up to 15 command lines by default."
      },
      {
        "id": "e",
        "text": "Save command lines in a log file for future reference."
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) Set the command history buffer size.; b) Recall previously entered commands.",
    "explanation": "The history command allows you to view and reuse previously entered commands stored in the buffer. It is also used to manage the of the buffer.",
    "topic": "Switching Concepts",
    "id": 1
  },
  {
    "question": "Which statement describes the system LED operation on Cisco Catalyst switches?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "If the LED is amber, the system is not powered on."
      },
      {
        "id": "b",
        "text": "If the LED is blinking amber, the switch is performing POST."
      },
      {
        "id": "c",
        "text": "If the LED is blinking green, the system is operating normally."
      },
      {
        "id": "d",
        "text": "If the LED is amber, the system is receiving power but it is not functioning properly."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) If the LED is amber, the system is receiving power but it is not functioning properly.",
    "explanation": "The system LED shows whether the system is receiving power and is functioning properly. If the LED is off, the system is not powered on. If the LED is green, the system is operating normally. If the LED is amber, the system is receiving power but is not functioning properly.",
    "topic": "Switching Concepts",
    "id": 2
  },
  {
    "question": "What type of Ethernet cable would be used to connect one switch to another switch when neither switch supports the auto-MDIX feature?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "rollover"
      },
      {
        "id": "b",
        "text": "crossover"
      },
      {
        "id": "c",
        "text": "straight-through"
      },
      {
        "id": "d",
        "text": "coaxial"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) crossover",
    "explanation": "A straight-through cable can be used to connect a computer or a router to a switch. A rollover cable can be used to access a router or switch console line. A coaxial cable is not used any longer in Ethernet networks, but can be found in video connections. A crossover cable can be used to connect a switch to a switch, a computer to a computer, and a router to a router.",
    "topic": "Switching Concepts",
    "id": 3
  },
  {
    "question": "What advantage does SSH offer over Telnet?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "connection-oriented services"
      },
      {
        "id": "b",
        "text": "more connection lines"
      },
      {
        "id": "c",
        "text": "username and password authentication"
      },
      {
        "id": "d",
        "text": "encryption"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) encryption",
    "explanation": "Both Telnet and SSH are used to remotely connect to a network device for management tasks. However, Telnet uses plaintext communications, whereas SSH provides security for remote connections by providing encryption of all transmitted data between devices.",
    "topic": "Switching Concepts",
    "id": 4
  },
  {
    "question": "A network administrator has configured VLAN 99 as the management VLAN and has configured it with an IP address and subnet mask. The administrator issues the show interface vlan 99 command and notices that the line protocol is down. Which action can change the state of the line protocol to up?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Configure a transport input method on the vty lines."
      },
      {
        "id": "b",
        "text": "Connect a host to an interface associated with VLAN 99."
      },
      {
        "id": "c",
        "text": "Remove all access ports from VLAN 99."
      },
      {
        "id": "d",
        "text": "Configure a default gateway."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Connect a host to an interface associated with VLAN 99.",
    "explanation": "Once an SVI is configured with an IP address and subnet mask, it can be used for remote management. An SVI interface will be active when the SVI VLAN has an active port associated with it.",
    "topic": "Switching Concepts",
    "id": 5
  },
  {
    "question": "Which statement describes SVIs?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An SVI can only be created for the management VLAN."
      },
      {
        "id": "b",
        "text": "A default SVI is created for VLAN 1 for switch administration."
      },
      {
        "id": "c",
        "text": "Creating an SVI automatically creates an associated VLAN."
      },
      {
        "id": "d",
        "text": "An SVI is created automatically for each VLAN on a multilayer switch."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) A default SVI is created for VLAN 1 for switch administration.",
    "explanation": "To allow for remote switch administration, an SVI is created by default for VLAN 1.",
    "topic": "Switching Concepts",
    "id": 6
  },
  {
    "question": "Which prompt is displayed when a network administrator successfully accesses the boot loader on a switch to recover from a system crash?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "switch#"
      },
      {
        "id": "b",
        "text": "system#"
      },
      {
        "id": "c",
        "text": "system:"
      },
      {
        "id": "d",
        "text": "switch:"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) switch:",
    "explanation": "The boot loader provides access into the switch if the operating system cannot be used because of missing or damaged system files. After some steps have been completed, the boot loader can be accessed through a console connection, through the switch: prompt.",
    "topic": "Switching Concepts",
    "id": 7
  },
  {
    "question": "Which router bootup sequence is correct?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "1 - perform the POST and load the bootstrap program; 2 - locate and load the Cisco IOS software; 3 - locate and load the startup configuration file or enter setup mode"
      },
      {
        "id": "b",
        "text": "1 - perform the POST and load the startup configuration file; 2 - locate and load the bootstrap program; 3 - locate and load the Cisco IOS software"
      },
      {
        "id": "c",
        "text": "1 - perform the POST and load the bootstrap program; 2 - locate and load the startup configuration file or enter setup mode; 3 - locate and load the Cisco IOS software"
      },
      {
        "id": "d",
        "text": "1 - perform the POST and load the Cisco IOS software; 2 - locate and load the startup configuration file or enter setup mode; 3 - locate and load the bootstrap program"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) 1 - perform the POST and load the bootstrap program; 2 - locate and load the Cisco IOS software; 3 - locate and load the startup configuration file or enter setup mode",
    "explanation": "When a router is powered on, it undergoes a POST to verify that the hardware is functional, after which it proceeds by locating and loading the Cisco IOS software and then loading the startup configuration file if one is present.",
    "topic": "Switching Concepts",
    "id": 8
  },
  {
    "question": "What is the first action in the boot sequence when a switch is powered on?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "low-level CPU initialization"
      },
      {
        "id": "b",
        "text": "load boot loader software"
      },
      {
        "id": "c",
        "text": "load the default Cisco IOS software"
      },
      {
        "id": "d",
        "text": "load a power-on self-test program"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) load a power-on self-test program",
    "explanation": "The first action to take place when a switch is powered on is the POST or power-on self-test. POST performs tests on the CPU, memory, and flash in preparation for loading the boot loader.",
    "topic": "Switching Concepts",
    "id": 9
  },
  {
    "question": "What must an administrator have in order to reset a lost password on a router?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "access to another router"
      },
      {
        "id": "b",
        "text": "physical access to the router"
      },
      {
        "id": "c",
        "text": "a TFTP server"
      },
      {
        "id": "d",
        "text": "a crossover cable"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) physical access to the router",
    "explanation": "Console access to the device through a terminal or terminal emulator software on a PC is required for password recovery.",
    "topic": "Switching Concepts",
    "id": 10
  },
  {
    "question": "When configuring a switch for SSH access, what other command that is associated with the login local command is required to be entered on the switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "login block-for seconds attempts number within seconds"
      },
      {
        "id": "b",
        "text": "enable secret password"
      },
      {
        "id": "c",
        "text": "username username secret secret"
      },
      {
        "id": "d",
        "text": "password password"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) username username secret secret",
    "explanation": "The login local command designates that the local username database is used to authenticate interfaces such as console or vty.",
    "topic": "Switching Concepts",
    "id": 11
  },
  {
    "question": "Which command will provide information about the status of all interfaces including the number of giants, runts, and collisions on the interface?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "show interfaces"
      },
      {
        "id": "b",
        "text": "show ip interface brief"
      },
      {
        "id": "c",
        "text": "show history"
      },
      {
        "id": "d",
        "text": "show running-config"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) show interfaces",
    "explanation": "The show interfaces command is the most comprehensive in providing information about interfaces. The show ip interface brief command does not provide information on giants, runts, or collisions. The show history command provides a history of the commands that are used. The show running-config command will show configuration information, but not status information.",
    "topic": "Switching Concepts",
    "id": 12
  },
  {
    "question": "Which interface is used by default to manage a Cisco Catalyst 2960 switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The FastEthernet 0/1 interface"
      },
      {
        "id": "b",
        "text": "The GigabitEthernet 0/1 interface"
      },
      {
        "id": "c",
        "text": "The VLAN 1 interface"
      },
      {
        "id": "d",
        "text": "The VLAN 99 interface"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) The VLAN 1 interface",
    "explanation": "Interface VLAN 1 is the default management SVI.",
    "topic": "Switching Concepts",
    "id": 13
  },
  {
    "question": "A production switch is reloaded and finishes with a Switch> prompt. What two facts can be determined? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "A full version of the Cisco IOS was located and loaded."
      },
      {
        "id": "b",
        "text": "POST occurred normally."
      },
      {
        "id": "c",
        "text": "The boot process was interrupted."
      },
      {
        "id": "d",
        "text": "There is not enough RAM or flash on this router."
      },
      {
        "id": "e",
        "text": "The switch did not locate the Cisco IOS in flash, so it defaulted to ROM."
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) A full version of the Cisco IOS was located and loaded.; b) POST occurred normally.",
    "explanation": "The Switch prompt typically occurs after a switch boots normally but does not have or has failed to load a startup configuration file.",
    "topic": "Switching Concepts",
    "id": 14
  },
  {
    "question": "Which two statements are true about using full-duplex Fast Ethernet? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Full-duplex Fast Ethernet offers 100 percent efficiency in both directions."
      },
      {
        "id": "b",
        "text": "Latency is reduced because the NIC processes frames faster."
      },
      {
        "id": "c",
        "text": "Nodes operate in full-duplex with unidirectional data flow."
      },
      {
        "id": "d",
        "text": "Performance is improved because the NIC is able to detect collisions."
      },
      {
        "id": "e",
        "text": "Performance is improved with bidirectional data flow."
      }
    ],
    "correctAnswer": [
      "a",
      "e"
    ],
    "officialKeyDisplay": "a) Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.; e) Performance is improved with bidirectional data flow.",
    "explanation": "In full-duplex operation, the NIC does not process frames any faster, the data flow is bidirectional, and there are no collisions.",
    "topic": "Switching Concepts",
    "id": 15
  },
  {
    "question": "Which statement describes the port speed LED on the Cisco Catalyst 2960 switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "If the LED is amber, the port is operating at 1000 Mbps."
      },
      {
        "id": "b",
        "text": "If the LED is blinking green, the port is operating at 10 Mbps."
      },
      {
        "id": "c",
        "text": "If the LED is green, the port is operating at 100 Mbps."
      },
      {
        "id": "d",
        "text": "If the LED is off, the port is not operating."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) If the LED is green, the port is operating at 100 Mbps.",
    "explanation": "The port speed LED indicates that the port speed mode is selected. When selected, the port LEDs will display colors with different meanings. If the LED is off, the port is operating at 10 Mbps. If the LED is green, the port is operating at 100 Mbps. If the LED is blinking green, the port is operating at 1000 Mbps.",
    "topic": "Switching Concepts",
    "id": 16
  },
  {
    "question": "What is a function of the switch boot loader?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To control how much RAM is available to the switch during the boot process"
      },
      {
        "id": "b",
        "text": "To provide an environment to operate in when the switch operating system cannot be found"
      },
      {
        "id": "c",
        "text": "To provide security for the vulnerable state when the switch is booting"
      },
      {
        "id": "d",
        "text": "To speed up the boot process"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) To provide an environment to operate in when the switch operating system cannot be found",
    "explanation": "The switch boot loader environment is presented when the switch cannot locate a valid operating system. The boot loader environment provides a few basic commands that allow a network administrator to reload the operating system or provide an alternate location of the operating system.",
    "topic": "Switching Concepts",
    "id": 17
  },
  {
    "question": "In which situation would a technician use the show interfaces command?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To determine whether remote access is enabled"
      },
      {
        "id": "b",
        "text": "To determine the MAC address of a directly attached network device on a particular interface"
      },
      {
        "id": "c",
        "text": "When packets are being dropped from a particular directly attached host"
      },
      {
        "id": "d",
        "text": "When an end device can reach local devices, but not remote devices"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) When packets are being dropped from a particular directly attached host",
    "explanation": "The show interfaces command is useful to detect media errors, to see if packets are being sent and received, and to determine if any runts, giants, CRCs, interface resets, or other errors have occurred. Problems with reachability to a remote network would likely be caused by a misconfigured default gateway or other routing issue, not a switch issue. The show mac address-table command shows the MAC address of a directly attached device.",
    "topic": "Switching Concepts",
    "id": 18
  },
  {
    "question": "What is one difference between using Telnet or SSH to connect to a network device for management purposes?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Telnet does not provide authentication, whereas SSH provides authentication."
      },
      {
        "id": "b",
        "text": "Telnet sends a username and password in plain text, whereas SSH encrypts the username and password."
      },
      {
        "id": "c",
        "text": "Telnet supports a host GUI, whereas SSH supports only a host CLI."
      },
      {
        "id": "d",
        "text": "Telnet uses UDP as the transport protocol, whereas SSH uses TCP."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Telnet sends a username and password in plain text, whereas SSH encrypts the username and password.",
    "explanation": "SSH provides security for remote management connections to a network device. SSH does so through encryption for session authentication (username and password) as well as for data transmission. Telnet sends a username and password in plain text, which can be targeted to obtain the username and password through data capture. Both Telnet and SSH use TCP, support authentication, and connect to hosts in CLI.",
    "topic": "Switching Concepts",
    "id": 19
  },
  {
    "question": "What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is a logical interface internal to the router."
      },
      {
        "id": "b",
        "text": "It is assigned to a physical port and can be connected to other devices."
      },
      {
        "id": "c",
        "text": "Only one loopback interface can be enabled on a router."
      },
      {
        "id": "d",
        "text": "The no shutdown command is required to place this interface in an up state."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) It is a logical interface internal to the router.",
    "explanation": "The loopback interface is a logical interface internal to the router and is automatically placed in an UP state, as long as the router is functioning. It is not assigned to a physical port and can therefore never be connected to any other device. Multiple loopback interfaces can be enabled on a router.",
    "topic": "Switching Concepts",
    "id": 20
  },
  {
    "question": "What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Interface descriptions"
      },
      {
        "id": "b",
        "text": "IPv4 addresses"
      },
      {
        "id": "c",
        "text": "Layer 1 statuses"
      },
      {
        "id": "d",
        "text": "MAC addresses"
      },
      {
        "id": "e",
        "text": "Next-hop addresses"
      },
      {
        "id": "f",
        "text": "Speed and duplex settings"
      }
    ],
    "correctAnswer": [
      "b",
      "c"
    ],
    "officialKeyDisplay": "b) IPv4 addresses; c) Layer 1 statuses",
    "explanation": "The show ip interface brief command displays the IPv4 address of each interface, as well as the operational status of the interfaces at both Layer 1 and Layer 2. In order to see interface descriptions and speed and duplex settings, use the show runningconfig interface command. Next-hop addresses are displayed in the routing table with the show ip route command, and the MAC address of an interface can be seen with the show interfaces command.",
    "topic": "Switching Concepts",
    "id": 21
  },
  {
    "question": "What type of cable would be used to connect a router to a switch when neither supports the auto-MDIX feature?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Coaxial"
      },
      {
        "id": "b",
        "text": "Crossover"
      },
      {
        "id": "c",
        "text": "Rollover"
      },
      {
        "id": "d",
        "text": "Straight-through"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) Straight-through",
    "explanation": "",
    "topic": "Switching Concepts",
    "id": 22
  },
  {
    "question": "Which statement regarding a loopback interface is true?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is an internal virtual interface used for testing purposes."
      },
      {
        "id": "b",
        "text": "It is used to loop back traffic to an interface."
      },
      {
        "id": "c",
        "text": "It must be enabled using the no shutdown command."
      },
      {
        "id": "d",
        "text": "Only one loopback interface can be created on a device."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) It is an internal virtual interface used for testing purposes.",
    "explanation": "The loopback interface is useful in testing and managing a Cisco IOS device because it ensures that at least one interface will always be available. It can be used for testing purposes, such as testing internal routing processes.",
    "topic": "Switching Concepts",
    "id": 23
  },
  {
    "question": "You are implementing remote access to the VTY lines of a switch using SSH and the login local line vty command. Which other command must be entered to avoid being locked out of the switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "enable secret password"
      },
      {
        "id": "b",
        "text": "password password"
      },
      {
        "id": "c",
        "text": "service-password encryption"
      },
      {
        "id": "d",
        "text": "username username secret password"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) username username secret password",
    "explanation": "When authenticating SSH users with the login local command, a username and password pair must be created and added to the local database. Otherwise, authentication would never be successful.",
    "topic": "Switching Concepts",
    "id": 24
  },
  {
    "question": "Which statement is true about broadcast and collision domains?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The size of the collision domain can be reduced by adding hubs to a network."
      },
      {
        "id": "b",
        "text": "Adding a switch to a network will increase the size of the broadcast domain."
      },
      {
        "id": "c",
        "text": "Adding a router to a network will increase the size of the collision domain."
      },
      {
        "id": "d",
        "text": "The more interfaces a router has the larger the resulting broadcast domain."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Adding a switch to a network will increase the size of the broadcast domain.",
    "explanation": "A switch that receives a broadcast frame will forward the frame out all other interfaces, including interfaces that connect to other switches. These switches will also perform the same forwarding action. By adding more switches to the network, the size of the broadcast domain increases.",
    "topic": "Switching Concepts",
    "id": 25
  },
  {
    "question": "What is one function of a Layer 2 switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "forwards data based on logical addressing"
      },
      {
        "id": "b",
        "text": "determines which interface is used to forward a frame based on the destination MAC address"
      },
      {
        "id": "c",
        "text": "duplicates the electrical signal of each frame to every port"
      },
      {
        "id": "d",
        "text": "learns the port assigned to a host by examining the destination MAC address"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) determines which interface is used to forward a frame based on the destination MAC address",
    "explanation": "A switch builds a MAC address table of MAC addresses and associated port numbers by examining the source MAC address found in inbound frames. To forward a frame onward, the switch examines the destination MAC address, looks in the MAC address for a port number associated with that destination MAC address, and sends it to the specific port. If the destination MAC address is not in the table, the switch forwards the frame out all ports except the inbound port that originated the frame.",
    "topic": "Switching Concepts",
    "id": 26
  },
  {
    "question": "What is the significant difference between a hub and a Layer 2 LAN switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A hub divides collision domains, and a switch divides broadcast domains."
      },
      {
        "id": "b",
        "text": "Each port of a hub is a collision domain, and each port of a switch is a broadcast domain."
      },
      {
        "id": "c",
        "text": "A switch creates many smaller collision domains, and a hub increases the size of a single collision domain."
      },
      {
        "id": "d",
        "text": "A hub forwards frames, and a switch forwards only packets."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) A switch creates many smaller collision domains, and a hub increases the size of a single collision domain.",
    "explanation": "Hubs operate only at the physical layer, forwarding bits as wire signals out all ports, and extend the collision domain of a network. Switches forward frames at the data link layer and each switch port is a separate collision domain, and thus more, but smaller, collision domains are created. Switches do not manage broadcast domains because broadcast frames are always forwarded out all active ports.",
    "topic": "Switching Concepts",
    "id": 27
  },
  {
    "question": "What will a Cisco LAN switch do if it receives an incoming frame and the destination MAC address is not listed in the MAC address table?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Send the frame to the default gateway address."
      },
      {
        "id": "b",
        "text": "Use ARP to resolve the port that is related to the frame."
      },
      {
        "id": "c",
        "text": "Drop the frame."
      },
      {
        "id": "d",
        "text": "Forward the frame out all ports except the port where the frame is received."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) Forward the frame out all ports except the port where the frame is received.",
    "explanation": "A LAN switch populates the MAC address table based on source MAC addresses. When a switch receives an incoming frame with a destination MAC address that is not listed in the MAC address table, the switch forwards the frame out all ports except for the ingress port of the frame. When the destination device responds, the switch adds the source MAC address and the port on which it was received to the MAC address table.",
    "topic": "Switching Concepts",
    "id": 28
  },
  {
    "question": "Which switch characteristic helps alleviate network congestion when a 10 Gbps port is forwarding data to a 1 Gbps port?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "high port density"
      },
      {
        "id": "b",
        "text": "fast port speed"
      },
      {
        "id": "c",
        "text": "fast internal switching"
      },
      {
        "id": "d",
        "text": "frame buffering"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) frame buffering",
    "explanation": "The large frame buffers on a switch hold the ingress traffic until such time that the slower egress port can transmit the data. This reduces the number of dropped frames and alleviates network congestion.",
    "topic": "Switching Concepts",
    "id": 29
  },
  {
    "question": "Which switching method makes use of the FCS value?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "broadcast"
      },
      {
        "id": "b",
        "text": "large frame buffer"
      },
      {
        "id": "c",
        "text": "store-and-forward"
      },
      {
        "id": "d",
        "text": "cut-through"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) store-and-forward",
    "explanation": "The store-and-forward method performs error checking on the frame using the frame-check sequence (FCS) value before sending the frame. The FCS value is the last field in the frame.",
    "topic": "Switching Concepts",
    "id": 30
  },
  {
    "question": "What does the term \"port density\" represent for an Ethernet switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "the memory space that is allocated to each switch port"
      },
      {
        "id": "b",
        "text": "the number of available ports"
      },
      {
        "id": "c",
        "text": "the speed of each port"
      },
      {
        "id": "d",
        "text": "the numbers of hosts that are connected to each switch port"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) the number of available ports",
    "explanation": "The term port density represents the number of ports available in a switch. A one rack unit access switch can have up to 48 ports. Larger switches may support hundreds of ports.",
    "topic": "Switching Concepts",
    "id": 31
  },
  {
    "question": "Which information does a switch use to keep the MAC address table information current?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "the source MAC address and the incoming port"
      },
      {
        "id": "b",
        "text": "the source and destination MAC addresses and the incoming port"
      },
      {
        "id": "c",
        "text": "the source and destination MAC addresses and the outgoing port"
      },
      {
        "id": "d",
        "text": "the destination MAC address and the incoming port"
      },
      {
        "id": "e",
        "text": "the source MAC address and the outgoing port"
      },
      {
        "id": "f",
        "text": "the destination MAC address and the outgoing port"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) the source MAC address and the incoming port",
    "explanation": "To maintain the MAC address table, the switch uses the source MAC address of the incoming packets and the port that the packets enter. The destination address is used to select the outgoing port.",
    "topic": "Switching Concepts",
    "id": 32
  },
  {
    "question": "Which two statements are true about half-duplex and full-duplex communications? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Half duplex has only one channel."
      },
      {
        "id": "b",
        "text": "Full duplex increases the effective bandwidth."
      },
      {
        "id": "c",
        "text": "Full duplex allows both ends to transmit and receive simultaneously."
      },
      {
        "id": "d",
        "text": "Full duplex offers 100 percent potential use of the bandwidth."
      },
      {
        "id": "e",
        "text": "All modern NICS support both half-duplex and full-duplex communication."
      }
    ],
    "correctAnswer": [
      "c",
      "d"
    ],
    "officialKeyDisplay": "c) Full duplex allows both ends to transmit and receive simultaneously.; d) Full duplex offers 100 percent potential use of the bandwidth.",
    "explanation": "Full-duplex communication allows both ends to transmit and receive simultaneously, offering 100 percent efficiency in both directions for a 200 percent potential use of stated bandwidth. Half-duplex communication is unidirectional, or one direction at a time. Gigabit Ethernet and 10 Gb/s NICs require full duplex to operate, and do not support half-duplex operation.",
    "topic": "Switching Concepts",
    "id": 33
  },
  {
    "question": "Which type of address does a switch use to build the MAC address table?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "source IP address"
      },
      {
        "id": "b",
        "text": "source MAC address"
      },
      {
        "id": "c",
        "text": "destination MAC address"
      },
      {
        "id": "d",
        "text": "destination IP address"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) source MAC address",
    "explanation": "When a switch receives a frame with a source MAC address that is not in the MAC address table, the switch will add that MAC address to the table and map that address to a specific port. Switches do not use IP addressing in the MAC address table.",
    "topic": "Switching Concepts",
    "id": 34
  },
  {
    "question": "Which option correctly describes a switching method?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "cut-through: makes a forwarding decision after receiving the entire frame"
      },
      {
        "id": "b",
        "text": "cut-through: provides the flexibility to support any mix of Ethernet speeds"
      },
      {
        "id": "c",
        "text": "store-and-forward: forwards the frame immediately after examining its destination MAC address"
      },
      {
        "id": "d",
        "text": "store-and-forward: ensures that the frame is free of physical and data-link errors"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) store-and-forward: ensures that the frame is free of physical and data-link errors",
    "explanation": "Store-and-forward switching performs an error check on an incoming frame after receiving the entire frame on the ingress port. Switches which use this method have the flexibility to support any mix of Ethernet speeds. The cut-through method begins the forwarding process after the destination MAC address of an incoming frame is looked up and the egress port has been determined.",
    "topic": "Switching Concepts",
    "id": 35
  },
  {
    "question": "Which network device can serve as a boundary to divide a Layer 2 broadcast domain?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "router"
      },
      {
        "id": "b",
        "text": "Ethernet hub"
      },
      {
        "id": "c",
        "text": "access point"
      },
      {
        "id": "d",
        "text": "Ethernet bridge"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) router",
    "explanation": "Layer 1 and 2 devices (LAN switch and Ethernet hub) and access point devices do not filter MAC broadcast frames. Only a Layer 3 device, such as a router, can divide a Layer 2 broadcast domain.",
    "topic": "Switching Concepts",
    "id": 36
  },
  {
    "question": "What is the purpose of frame buffers on a switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They execute checksum values before transmission."
      },
      {
        "id": "b",
        "text": "They provide temporary storage of the frame checksum."
      },
      {
        "id": "c",
        "text": "They hold traffic, thus alleviating network congestion."
      },
      {
        "id": "d",
        "text": "They provide a basic security scan on received frames."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) They hold traffic, thus alleviating network congestion.",
    "explanation": "Switches have large frame buffers that allow data waiting to be transmitted to be stored so the data will not be dropped. This feature is beneficial especially if the incoming traffic is from a faster port than the egress port used for transmitting.",
    "topic": "Switching Concepts",
    "id": 37
  },
  {
    "question": "Which network device can be used to eliminate collisions on an Ethernet network?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "hub"
      },
      {
        "id": "b",
        "text": "firewall"
      },
      {
        "id": "c",
        "text": "switch"
      },
      {
        "id": "d",
        "text": "router"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) switch",
    "explanation": "A switch provides microsegmentation so that no other device competes for the same Ethernet network bandwidth.",
    "topic": "Switching Concepts",
    "id": 38
  },
  {
    "question": "What criteria is used by a Cisco LAN switch to decide how to forward Ethernet frames?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Destination IP address"
      },
      {
        "id": "b",
        "text": "Destination MAC address"
      },
      {
        "id": "c",
        "text": "Egress port"
      },
      {
        "id": "d",
        "text": "Path cost"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Destination MAC address",
    "explanation": "Cisco LAN switches use the MAC address table to make traffic forwarding decisions. The decisions are based on the ingress port and the destination MAC address of the frame. The ingress port information is important because it carries the VLAN to which the port belongs.",
    "topic": "Switching Concepts",
    "id": 39
  },
  {
    "question": "What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "To create fewer collision domains"
      },
      {
        "id": "b",
        "text": "To create more broadcast domains"
      },
      {
        "id": "c",
        "text": "To eliminate virtual circuits"
      },
      {
        "id": "d",
        "text": "To enhance user bandwidth"
      },
      {
        "id": "e",
        "text": "To isolate ARP request messages from the rest of the network"
      },
      {
        "id": "f",
        "text": "To isolate traffic between segments"
      }
    ],
    "correctAnswer": [
      "d",
      "f"
    ],
    "officialKeyDisplay": "d) To enhance user bandwidth; f) To isolate traffic between segments",
    "explanation": "A switch has the ability to create temporary point-to-point connections between the directly-attached transmitting and receiving network devices.\nThe two devices have full-bandwidth, full-duplex connectivity during the transmission. Segmenting adds collision domains to reduce collisions.",
    "topic": "Switching Concepts",
    "id": 40
  },
  {
    "question": "A switch has received a frame on an ingress port. What will the switch do if the unicast destination MAC address is in the MAC address table?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It will drop the frame."
      },
      {
        "id": "b",
        "text": "It will forward the frame out all ports."
      },
      {
        "id": "c",
        "text": "It will forward the frame out all ports except the incoming port."
      },
      {
        "id": "d",
        "text": "It will forward the frame out of the specified port in the MAC address table."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It will forward the frame out of the specified port in the MAC address table.",
    "explanation": "If the destination MAC address is in the table, it will forward the frame out of the specified port.",
    "topic": "Switching Concepts",
    "id": 41
  },
  {
    "question": "A switch has received a frame on an ingress port. What will the switch do if the unicast destination MAC address is not in the MAC address table?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It will drop the frame."
      },
      {
        "id": "b",
        "text": "It will forward the frame out all ports."
      },
      {
        "id": "c",
        "text": "It will forward the frame out all ports except the incoming port."
      },
      {
        "id": "d",
        "text": "It will forward the frame out of the specified port in the MAC address table."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) It will forward the frame out all ports.",
    "explanation": "If the destination MAC address is not in the table, the switch will forward the frame out all ports except the incoming port. This is called an unknown unicast.",
    "topic": "Switching Concepts",
    "id": 42
  },
  {
    "question": "A switch has received a frame on an ingress port. What will the switch do if the destination MAC address is a broadcast address?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It will drop the frame."
      },
      {
        "id": "b",
        "text": "It will forward the frame out all ports."
      },
      {
        "id": "c",
        "text": "It will forward the frame out all ports except the incoming port."
      },
      {
        "id": "d",
        "text": "It will forward the frame out of the specified port in the MAC address table."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) It will forward the frame out all ports except the incoming port.",
    "explanation": "If the destination MAC address is a broadcast or a multicast, the frame is also flooded out all ports except the incoming port.",
    "topic": "Switching Concepts",
    "id": 43
  },
  {
    "question": "Which switching method forwards the frame immediately after examining the destination MAC address?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Broadcast"
      },
      {
        "id": "b",
        "text": "Cut-though"
      },
      {
        "id": "c",
        "text": "Large frame buffer"
      },
      {
        "id": "d",
        "text": "Store-and-forward"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Cut-though",
    "explanation": "Cut-through switching has the ability to perform rapid frame switching, which means the switch can make a forwarding decision as soon as it has looked up the destination MAC address of the frame in its MAC address table.",
    "topic": "Switching Concepts",
    "id": 44
  },
  {
    "question": "Which statement about half-duplex and full-duplex communication is true?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Gigabit Ethernet and 10 Gb/s NICs can operate in full-duplex or half-duplex."
      },
      {
        "id": "b",
        "text": "Full-duplex communication is bidirectional."
      },
      {
        "id": "c",
        "text": "Half-duplex communication allows both ends to transmit and receive simultaneously."
      },
      {
        "id": "d",
        "text": "Half-duplex communication is unidirectional, or one direction at a time."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) Half-duplex communication is unidirectional, or one direction at a time.",
    "explanation": "Full-duplex communication allows both ends to transmit and receive simultaneously, offering 100 percent efficiency in both directions for a 200 percent potential use of stated bandwidth. Half-duplex communication is unidirectional, or one direction at a time. Gigabit Ethernet and 10 Gbps NICs require full- duplex to operate and do not support half-duplex operation.",
    "topic": "Switching Concepts",
    "id": 45
  },
  {
    "question": "What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The port creates the VLAN again."
      },
      {
        "id": "b",
        "text": "The port goes back to the default VLAN."
      },
      {
        "id": "c",
        "text": "The port automatically associates itself with the native VLAN."
      },
      {
        "id": "d",
        "text": "The port becomes inactive."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) The port becomes inactive.",
    "explanation": "If the VLAN that is associated with a port is deleted, the port becomes inactive and cannot communicate with the network any more. To verify that a port is in an inactive state, use the show interfaces switchport command.",
    "topic": "VLANs",
    "id": 46
  },
  {
    "question": "In which memory location are the VLAN configurations of normal range VLANs stored on a Catalyst switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "flash"
      },
      {
        "id": "b",
        "text": "ROM"
      },
      {
        "id": "c",
        "text": "RAM"
      },
      {
        "id": "d",
        "text": "NVRAM"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) flash",
    "explanation": "When a normal range VLAN is created the configuration information of the VLAN is stored in flash in the vlan.dat file.",
    "topic": "VLANs",
    "id": 47
  },
  {
    "question": "An administrator is investigating a failure on a trunk link between a Cisco switch and a switch from another vendor. After a few show commands, the administrator notices that the switches are not negotiating a trunk. What is a probable cause for this issue?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Both switches are in nonegotiate mode."
      },
      {
        "id": "b",
        "text": "Switches from other vendors do not support DTP."
      },
      {
        "id": "c",
        "text": "Both switches are in trunk mode."
      },
      {
        "id": "d",
        "text": "DTP frames are flooding the entire network."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Switches from other vendors do not support DTP.",
    "explanation": "DTP is a Cisco proprietary protocol. Non-Cisco switches do not support DTP.",
    "topic": "VLANs",
    "id": 48
  },
  {
    "question": "What is the purpose of the vlan.dat file on a switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It holds the VLAN database."
      },
      {
        "id": "b",
        "text": "It holds the running configuration."
      },
      {
        "id": "c",
        "text": "It holds the operating system."
      },
      {
        "id": "d",
        "text": "It holds the saved configuration."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) It holds the VLAN database.",
    "explanation": "The VLAN database (vlan.dat) contains information about normal range VLANs such as the VLAN number, name, and VTP mode.",
    "topic": "VLANs",
    "id": 49
  },
  {
    "question": "What is the purpose of setting the native VLAN separate from data VLANs?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANS."
      },
      {
        "id": "b",
        "text": "The security of management frames that are carried in the native VLAN can be enhanced."
      },
      {
        "id": "c",
        "text": "The native VLAN is for carrying VLAN mnanagement traffic only."
      },
      {
        "id": "d",
        "text": "The native VLAN is for routers and switches to exchange their management information, so it should be different from data VLANS."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANS.",
    "explanation": "When a Cisco switch trunk port receives untagged frames (unusual in well-designed networks), it forwards these frames to the native VLAN. When the native VLAN is moved away from data VLANs, those untagged frames will not compete for bandwidth in the data VLANs. The native VLAN is not designed for carrying management traffic, but rather it is for backward compatibility with legacy LAN scenarios.",
    "topic": "VLANs",
    "id": 50
  },
  {
    "question": "When a Cisco switch receives untagged frames on a 802.1Q trunk port, which VLAN ID is the traffic switched to by default?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "management VLAN ID"
      },
      {
        "id": "b",
        "text": "data VLAN ID"
      },
      {
        "id": "c",
        "text": "native VLAN ID"
      },
      {
        "id": "d",
        "text": "unused VLAN ID"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) native VLAN ID",
    "explanation": "A native VLAN is used to forward untagged frames that are received on a Cisco switch 802.1Q trunk port. Untagged frames that are received on a trunk port are not forwarded to any other VLAN except the native VLAN.",
    "topic": "VLANs",
    "id": 51
  },
  {
    "question": "A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "between two switches that utilize multiple VLANs"
      },
      {
        "id": "b",
        "text": "between a switch and a server that has an 802.1Q NIC"
      },
      {
        "id": "c",
        "text": "between a switch and a network printer"
      },
      {
        "id": "d",
        "text": "between two switches that share a common VLAN"
      },
      {
        "id": "e",
        "text": "between a switch and a client PC"
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) between two switches that utilize multiple VLANs; b) between a switch and a server that has an 802.1Q NIC",
    "explanation": "VLAN trunk links are used to allow all VLAN traffic to propagate between devices such as the link between a switch and a server that has an 802.1Q-capable NIC. Switches can also utilize trunk links to routers, servers, and to other switches.",
    "topic": "VLANs",
    "id": 52
  },
  {
    "question": "What are three primary benefits of using VLANs? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "security"
      },
      {
        "id": "b",
        "text": "a reduction in the number of trunk links"
      },
      {
        "id": "c",
        "text": "cost reduction"
      },
      {
        "id": "d",
        "text": "end user satisfaction"
      },
      {
        "id": "e",
        "text": "improved IT staff efficiency"
      },
      {
        "id": "f",
        "text": "no required configuration"
      }
    ],
    "correctAnswer": [
      "a",
      "c",
      "e"
    ],
    "officialKeyDisplay": "a) security; c) cost reduction; e) improved IT staff efficiency",
    "explanation": "Security, cost reduction, and improved IT staff efficiency are all benefits of using VLANs, along with higher performance, broadcast storm mitigation, and simpler project and application management. End users are not usually aware of VLANs, and VLANs do require configuration. Because VLANs are assigned to access ports, they do not reduce the number of trunk links.",
    "topic": "VLANs",
    "id": 53
  },
  {
    "question": "On a Cisco switch, where is extended range VLAN information stored?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "running configuration file"
      },
      {
        "id": "b",
        "text": "NVRAM"
      },
      {
        "id": "c",
        "text": "flash"
      },
      {
        "id": "d",
        "text": "startup configuration file"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) running configuration file",
    "explanation": "Extended range VLANs, 1006 through 4094, are not written to the vlan.dat file but are saved in the running configuration file.",
    "topic": "VLANs",
    "id": 54
  },
  {
    "question": "In which location are the normal range VLANs stored on a Cisco switch by default?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "RAM"
      },
      {
        "id": "b",
        "text": "flash memory"
      },
      {
        "id": "c",
        "text": "startup-config"
      },
      {
        "id": "d",
        "text": "running-config"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) flash memory",
    "explanation": "Normal range VLANs are stored in a file called vlan.dat and located in the flash memory.",
    "topic": "VLANs",
    "id": 55
  },
  {
    "question": "Which distinct type of VLAN is used by an administrator to access and configure a switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "data VLAN"
      },
      {
        "id": "b",
        "text": "default VLAN"
      },
      {
        "id": "c",
        "text": "native VLAN"
      },
      {
        "id": "d",
        "text": "management VLAN"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) management VLAN",
    "explanation": "A management VLAN is used to remotely access and configure a switch. Data VLANs are used to separate a network into groups of users or devices. The default VLAN is the initial VLAN all switch ports are placed in when loading the default configuration on a switch. The 802.1Q trunk port places untagged traffic on the native VLAN.",
    "topic": "VLANs",
    "id": 56
  },
  {
    "question": "For what reason would a network administrator use the show interfaces trunk command on a switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "to view the native VLAN"
      },
      {
        "id": "b",
        "text": "to examine DTP negotiation as it occurs"
      },
      {
        "id": "c",
        "text": "to display an IP address for any existing VLAN"
      },
      {
        "id": "d",
        "text": "to verify port association with a particular VLAN"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) to view the native VLAN",
    "explanation": "The show interfaces trunk command displays the ports that are trunk ports, the trunking mode, the encapsulation type, the trunk status, the native VLAN, and the allowed VLANs on the link.",
    "topic": "VLANs",
    "id": 57
  },
  {
    "question": "Where is the vlan.dat file stored on a switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "in NVRAM"
      },
      {
        "id": "b",
        "text": "in flash memory"
      },
      {
        "id": "c",
        "text": "in RAM"
      },
      {
        "id": "d",
        "text": "on the externally attached storage media or internal hard drive"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) in flash memory",
    "explanation": "Normal range VLAN configurations are stored within a VLAN database file, called vlan.dat, which is located in the flash memory of the switch.",
    "topic": "VLANs",
    "id": 58
  },
  {
    "question": "If an organization is changing to include Cisco IP phones in its network, what design feature must be considered to ensure voice quality?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Voice traffic needs to be tagged with the native VLAN."
      },
      {
        "id": "b",
        "text": "A separate VLAN is needed for voice traffic."
      },
      {
        "id": "c",
        "text": "Voice traffic and data traffic require separate trunk links between switches."
      },
      {
        "id": "d",
        "text": "Additional switch ports that are dedicated to Cisco IP phones are required."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) A separate VLAN is needed for voice traffic.",
    "explanation": "A PC commonly connects to an IP phone and the IP phone, in turn, connects to a switch. The phone does not require a separate port. Because voice traffic cannot tolerate much packet delay, it needs to be in a separate VLAN. The voice VLAN can be configured to provide quality of service (QoS), which will ensure that the voice traffic has a higher priority than data traffic.",
    "topic": "VLANs",
    "id": 59
  },
  {
    "question": "A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It allows a native VLAN of 30 to be implemented on Fa0/5."
      },
      {
        "id": "b",
        "text": "It allows VLANs 10, 20, and 30 on Fa0/5."
      },
      {
        "id": "c",
        "text": "It allows only VLAN 30 on Fa0/5."
      },
      {
        "id": "d",
        "text": "It allows VLANs 1 to 30 on Fa0/5."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) It allows only VLAN 30 on Fa0/5.",
    "explanation": "The switchport trunk allowed vlan 30 command allows traffic that is tagged with VLAN 30 across the trunk port. Any VLAN that is not specified in this command will not be allowed on this trunk port.",
    "topic": "VLANs",
    "id": 60
  },
  {
    "question": "Which three statements accurately describe VLAN types? (Choose three).",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "A data VLAN is used to carry VLAN management data and user-generated traffic."
      },
      {
        "id": "b",
        "text": "A management VLAN is any VLAN that is configured to access management features of the switch."
      },
      {
        "id": "c",
        "text": "After the initial boot of an unconfigured switch, all ports are members of the default VLAN."
      },
      {
        "id": "d",
        "text": "An 802.1Q trunk port, with a native VLAN assigned, supports both tagged and untagged traffic."
      },
      {
        "id": "e",
        "text": "Voice VLANs are used to support user phone and email traffic on a network."
      },
      {
        "id": "f",
        "text": "VLAN 1 is always used as the management VLAN."
      }
    ],
    "correctAnswer": [
      "b",
      "c",
      "d"
    ],
    "officialKeyDisplay": "b) A management VLAN is any VLAN that is configured to access management features of the switch.; c) After the initial boot of an unconfigured switch, all ports are members of the default VLAN.; d) An 802.1Q trunk port, with a native VLAN assigned, supports both tagged and untagged traffic.",
    "explanation": "A management VLAN is a VLAN that is configured to manage features of the switch. By default, all ports are members of the default VLAN. An 802.1Q trunk port supports both tagged and untagged traffic.",
    "topic": "VLANs",
    "id": 61
  },
  {
    "question": "Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Data"
      },
      {
        "id": "b",
        "text": "Default"
      },
      {
        "id": "c",
        "text": "Native"
      },
      {
        "id": "d",
        "text": "Management"
      },
      {
        "id": "e",
        "text": "VLAN 1"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) Native",
    "explanation": "A native VLAN is the VLAN that does not receive a VLAN tag in the IEEE 802.1Q frame header. Cisco best practices recommend the use of an unused VLAN (not a data VLAN, the default VLAN of VLAN 1, or the management VLAN) as the native VLAN whenever possible.",
    "topic": "VLANs",
    "id": 62
  },
  {
    "question": "What are two primary benefits of using VLANs? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "A reduction in the number of trunk links"
      },
      {
        "id": "b",
        "text": "Cost reduction"
      },
      {
        "id": "c",
        "text": "Improved IT staff efficiency"
      },
      {
        "id": "d",
        "text": "No required configuration"
      },
      {
        "id": "e",
        "text": "Reduced security"
      }
    ],
    "correctAnswer": [
      "b",
      "c"
    ],
    "officialKeyDisplay": "b) Cost reduction; c) Improved IT staff efficiency",
    "explanation": "Cost reduction and improved IT staff efficiency are all benefits of using VLANs, along with higher performance, broadcast storm mitigation, and simpler project and application management. End users are not usually aware of VLANs, and VLANs do require configuration. Because VLANs are assigned to access ports, they do not reduce the number of trunk links. VLANs increase security by segmenting traffic.",
    "topic": "VLANs",
    "id": 63
  },
  {
    "question": "Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "show interfaces Fa0/1 switchport"
      },
      {
        "id": "b",
        "text": "show interfaces trunk"
      },
      {
        "id": "c",
        "text": "show mac address-table interface Fa0/1"
      },
      {
        "id": "d",
        "text": "show vlan brief"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) show interfaces Fa0/1 switchport",
    "explanation": "The show interfaces switchport command displays the following information for a given port: Switchport, Administrative Mode, Operational Mode, Administrative Trunking Encapsulation, Operational Trunking Encapsulation, Negotiation of Trunking, Access Mode VLAN, Trunking Native Mode VLAN, Administrative Native VLAN tagging, Voice VLAN.",
    "topic": "VLANs",
    "id": 64
  },
  {
    "question": "What must the network administrator do to remove FastEthernet 0/1 from VLAN 2 and assign it to VLAN 3?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Enter the no shutdown interface config command on Fa0/1."
      },
      {
        "id": "b",
        "text": "Enter the no vlan 2 and the vlan 3 global config commands."
      },
      {
        "id": "c",
        "text": "Enter the switchport access vlan 3 interface config command on Fa0/1."
      },
      {
        "id": "d",
        "text": "Enter the switchport trunk native vlan 3 interface config command on Fa0/1."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) Enter the switchport access vlan 3 interface config command on Fa0/1.",
    "explanation": "Entering the switchport access vlan 3 interface config command on Fa0/1 replaces the current port VLAN assignment from VLAN 2 to VLAN 3.",
    "topic": "VLANs",
    "id": 65
  },
  {
    "question": "A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Delete the IP address that is assigned to the management VLAN and reboot the switch."
      },
      {
        "id": "b",
        "text": "Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch."
      },
      {
        "id": "c",
        "text": "Erase the running configuration and reboot the switch."
      },
      {
        "id": "d",
        "text": "Erase the startup configuration and reboot the switch."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch.",
    "explanation": "To restore a Catalyst switch to its factory default condition, unplug all cables except the console and power cable from the switch. Then enter the erase startup-config privileged EXEC mode command followed by the delete vlan.dat command and reboot the switch.",
    "topic": "VLANs",
    "id": 66
  },
  {
    "question": "Which two characteristics match extended range VLANs? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "CDP can be used to learn and store these VLANs."
      },
      {
        "id": "b",
        "text": "They are commonly used in small networks."
      },
      {
        "id": "c",
        "text": "They are saved in the running-config file by default."
      },
      {
        "id": "d",
        "text": "VLAN IDs exist between 1006 to 4094."
      },
      {
        "id": "e",
        "text": "VLANs are initialized from flash memory."
      }
    ],
    "correctAnswer": [
      "c",
      "d"
    ],
    "officialKeyDisplay": "c) They are saved in the running-config file by default.; d) VLAN IDs exist between 1006 to 4094.",
    "explanation": "Extended range VLANs are stored in the running-configuration file by default and must be saved after being configured. Extended VLANs use the VLAN IDs from 1006 to 4094.",
    "topic": "VLANs",
    "id": 67
  },
  {
    "question": "What happens to switch ports after the VLAN to which they are assigned is deleted?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The ports are assigned to VLAN 1, the default VLAN."
      },
      {
        "id": "b",
        "text": "The ports are disabled and must be re-enabled using the no shutdown command."
      },
      {
        "id": "c",
        "text": "The ports are placed in trunk mode."
      },
      {
        "id": "d",
        "text": "The ports stop communicating with the attached devices."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) The ports are assigned to VLAN 1, the default VLAN.",
    "explanation": "Any ports that are not moved to an active VLAN cannot communicate with other hosts after the VLAN is deleted. They must be assigned to an active VLAN or their VLAN must be created.",
    "topic": "VLANs",
    "id": 68
  },
  {
    "question": "You must configure a trunk link between a Cisco Catalyst 2960 switch to another vendor Layer 2 switch. Which two commands should be configured to enable the trunk link? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "switchport mode access"
      },
      {
        "id": "b",
        "text": "switchport mode dynamic auto"
      },
      {
        "id": "c",
        "text": "switchport mode dynamic desirable"
      },
      {
        "id": "d",
        "text": "switchport mode trunk"
      },
      {
        "id": "e",
        "text": "switchport nonegotiate"
      }
    ],
    "correctAnswer": [
      "d",
      "e"
    ],
    "officialKeyDisplay": "d) switchport mode trunk; e) switchport nonegotiate",
    "explanation": "To enable trunking from a Cisco switch to a device that does not support DTP, use the switchport mode trunk and switchport nonegotiate interface configuration mode commands. This causes the interface to become a trunk, but it will not generate DTP frames.",
    "topic": "VLANs",
    "id": 69
  },
  {
    "question": "A PC is to access a web server on another network. Which inter-VLAN method will provide the highest bandwidth at Layer 3 and also provide a default gateway for the PC?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "multilayer switch with routing enabled"
      },
      {
        "id": "b",
        "text": "router on a stick"
      },
      {
        "id": "c",
        "text": "trunked interface between the router and the switch"
      },
      {
        "id": "d",
        "text": "multiple physical interfaces on the router, all connected to a Layer 2 switch"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) multilayer switch with routing enabled",
    "explanation": "A router-on-a-stick design is the same as having a trunked interface between the router and the switch. This design works, but does not scale well because all VLANs must traverse the one connection between the router and the switch. Multiple physical interfaces on the router would be faster than the router-on-a-stick design, but a router has a limited number of physical interfaces. Layer 3 switches with routing enabled have more Ethernet ports as well as the ability to route.",
    "topic": "Inter-VLAN Routing",
    "id": 70
  },
  {
    "question": "Which scalable method must be implemented in order to provide inter-VLAN routing on a switched network with more than 1000 VLANs?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "routing traffic internally to a Layer 3 switch device"
      },
      {
        "id": "b",
        "text": "configuring static routes on a Layer 2 switch device"
      },
      {
        "id": "c",
        "text": "connecting a router interface to a switch port that is configured in trunk mode to route packets between VLANs, with each VLAN assigned to a router subinterface"
      },
      {
        "id": "d",
        "text": "connecting each physical router interface to a different physical switch port, with each switch port assigned to a different VLAN"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) routing traffic internally to a Layer 3 switch device",
    "explanation": "Layer 2 switches are able to perform static routing, but this method is inefficient with a large number of VLANs. Multilayer switching is more scalable than any other inter-VLAN routing implementation, with traffic being routed internally to the switch device. In router-on-a-stick inter-VLAN routing, where a single physical interface routes traffic among multiple VLANs on a network, there is no practical scalability. The legacy inter-VLAN routing is very inefficient and is no longer used in switched networks, because each VLAN requires a physical router interface that is connected to a different physical switch port.",
    "topic": "Inter-VLAN Routing",
    "id": 71
  },
  {
    "question": "When configuring a router as part of a router-on-a-stick inter-VLAN routing topology, where should the IP address be assigned?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "to the subinterface"
      },
      {
        "id": "b",
        "text": "to the interface"
      },
      {
        "id": "c",
        "text": "to the SVI"
      },
      {
        "id": "d",
        "text": "to the VLAN"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) to the subinterface",
    "explanation": "The IP address and the encapsulation type should be assigned to each router subinterface in a router-on-a-stick inter-VLAN topology.",
    "topic": "Inter-VLAN Routing",
    "id": 72
  },
  {
    "question": "A small college uses VLAN 10 for the classroom network and VLAN 20 for the office network. What is needed to enable communication between these two VLANs while using legacy inter-VLAN routing?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Two groups of switches are needed, each with ports that are configured for one VLAN."
      },
      {
        "id": "b",
        "text": "A router with at least two LAN interfaces should be used."
      },
      {
        "id": "c",
        "text": "A router with one VLAN interface is needed to connect to the SVI on a switch."
      },
      {
        "id": "d",
        "text": "A switch with a port that is configured as trunk is needed to connect to a router."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) A router with at least two LAN interfaces should be used.",
    "explanation": "With legacy inter-VLAN routing, different physical router interfaces are connected to different physical switch ports. The switch ports that connect to the router are in access mode, each belonging to a different VLAN. Switches can have ports that are assigned to different VLANs, but communication between VLANs requires routing function from the router.",
    "topic": "Inter-VLAN Routing",
    "id": 73
  },
  {
    "question": "What is a disadvantage of using multilayer switches for inter-VLAN routing?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Multilayer switches are more expensive than router-on-a-stick implementations."
      },
      {
        "id": "b",
        "text": "Multilayer switches have higher latency for Layer 3 routing."
      },
      {
        "id": "c",
        "text": "Spanning tree must be disabled in order to implement routing on a multilayer switch."
      },
      {
        "id": "d",
        "text": "Multilayer switches are limited to using trunk links for Layer 3 routing."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) Multilayer switches are more expensive than router-on-a-stick implementations.",
    "explanation": "The main disadvantage of the multilayer switches is their higher cost. Because both routing and switching are done in hardware, multilayer switches are faster than router-on-a-stick.",
    "topic": "Inter-VLAN Routing",
    "id": 74
  },
  {
    "question": "Which type of inter-VLAN communication design requires the configuration of multiple subinterfaces?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "router on a stick"
      },
      {
        "id": "b",
        "text": "routing for the management VLAN"
      },
      {
        "id": "c",
        "text": "routing via a multilayer switch"
      },
      {
        "id": "d",
        "text": "legacy inter-VLAN routing"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) router on a stick",
    "explanation": "The router-on-a-stick design always includes subinterfaces on a router. When a multilayer switch is used, multiple SVIs are created. When the number of VLANs equals the number of ports on a router, or when the management VLAN needs to be routed, any of the inter-VLAN design methods can be used.",
    "topic": "Inter-VLAN Routing",
    "id": 75
  },
  {
    "question": "What is a disadvantage of using router-on-a-stick inter-VLAN routing?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "does not scale well beyond 50 VLANs"
      },
      {
        "id": "b",
        "text": "requires the use of more physical interfaces than legacy inter-VLAN routing"
      },
      {
        "id": "c",
        "text": "requires the use of multiple router interfaces configured to operate as access links"
      },
      {
        "id": "d",
        "text": "does not support VLAN-tagged packets"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) does not scale well beyond 50 VLANs",
    "explanation": "Router-on-a-stick inter-VLAN routing does not scale beyond 50 VLANs. The router can receive VLAN-tagged packets and send VLAN-tagged packets to a destination. Router-on-a-stick inter-VLAN routing can utilize a single router interface as a trunk link to receive and forward VLAN traffic and does not require multiple interfaces.",
    "topic": "Inter-VLAN Routing",
    "id": 76
  },
  {
    "question": "What is the meaning of the number 10 in the encapsulation dot1Q 10 native router subinterface command?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "the subinterface number"
      },
      {
        "id": "b",
        "text": "the interface number"
      },
      {
        "id": "c",
        "text": "the VLAN ID"
      },
      {
        "id": "d",
        "text": "the subnet number"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) the VLAN ID",
    "explanation": "The administrator can use the encapsulation command to specify the encapsulation type (IEEE 802.1Q or ISL), the VLAN ID, and optionally the native VLAN.",
    "topic": "Inter-VLAN Routing",
    "id": 77
  },
  {
    "question": "While configuring inter-VLAN routing on a multilayer switch, a network administrator issues the no switchport command on an interface that is connected to another switch. What is the purpose of this command?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "to create a switched virtual interface"
      },
      {
        "id": "b",
        "text": "to create a routed port for a single network"
      },
      {
        "id": "c",
        "text": "to provide a static trunk link"
      },
      {
        "id": "d",
        "text": "to provide an access link that tags VLAN traffic"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) to create a routed port for a single network",
    "explanation": "When a Layer 2 interface on a multilayer switch is configured with the no switchport command, it becomes a routed port. A routed port is configured with an IP address for a specific subnet.",
    "topic": "Inter-VLAN Routing",
    "id": 78
  },
  {
    "question": "A network administrator enters the following command sequence on a Cisco 3560 switch. What is the purpose of these commands?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "to enable the Gi0/1 port as a switch virtual interface"
      },
      {
        "id": "b",
        "text": "to enable the Gi0/1 port as a bridge virtual interface"
      },
      {
        "id": "c",
        "text": "to make the Gi0/1 port a routed port"
      },
      {
        "id": "d",
        "text": "to shut down the Gi0/1 port"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) to make the Gi0/1 port a routed port",
    "explanation": "By default, the physical ports on a 3560 switch are Layer 2 interfaces. To make them routed ports, the interface command no switchport should be used. The other options do not describe the purpose of this command.",
    "topic": "Inter-VLAN Routing",
    "id": 79
  },
  {
    "question": "What operational mode should be used on a switch port to connect it to a router for router-on-a-stick inter-VLAN routing?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "dynamic auto"
      },
      {
        "id": "b",
        "text": "trunk"
      },
      {
        "id": "c",
        "text": "access"
      },
      {
        "id": "d",
        "text": "dynamic desirable"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) trunk",
    "explanation": "Routers do not support Dynamic Trunking Protocol, and access mode is used to connect hosts.",
    "topic": "Inter-VLAN Routing",
    "id": 80
  },
  {
    "question": "Which sentence correctly describes the SVI inter-VLAN routing method?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Subinterfaces have to be created."
      },
      {
        "id": "b",
        "text": "A physical interface is needed for every VLAN that is created."
      },
      {
        "id": "c",
        "text": "An SVI is needed for each VLAN."
      },
      {
        "id": "d",
        "text": "The encapsulation type must be configured on the SVI."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) An SVI is needed for each VLAN.",
    "explanation": "In order to create SVI inter-VLAN routing on a Layer 3 switch, the VLAN must exist in the database and the SVI must be explicitly created. The only exception is VLAN1, which is created by default.",
    "topic": "Inter-VLAN Routing",
    "id": 81
  },
  {
    "question": "How is traffic routed between multiple VLANs on a multilayer switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Traffic is routed via internal VLAN interfaces."
      },
      {
        "id": "b",
        "text": "Traffic is routed via subinterfaces."
      },
      {
        "id": "c",
        "text": "Traffic is routed via physical interfaces."
      },
      {
        "id": "d",
        "text": "Traffic is broadcast out all physical interfaces."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) Traffic is routed via physical interfaces.",
    "explanation": "Multilayer switches can perform inter-VLAN routing by the use of internal VLAN interfaces. External physical interfaces can receive traffic but are not necessary for routing functions. When routing between VLANs, any broadcast traffic that is received on a VLAN would remain on ports that are members of that VLAN. Subinterfaces are not usable for inter-VLAN routing on multilayer switches.",
    "topic": "Inter-VLAN Routing",
    "id": 82
  },
  {
    "question": "What is required to perform router-on-a-stick inter-VLAN routing?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "a multilayer switch"
      },
      {
        "id": "b",
        "text": "a router that is configured with multiple subinterfaces"
      },
      {
        "id": "c",
        "text": "a router with multiple physical interfaces"
      },
      {
        "id": "d",
        "text": "a Layer 2 switch that is configured with multiple trunk ports"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) a router that is configured with multiple subinterfaces",
    "explanation": "With router-on-a-stick inter-VLAN routing, a single physical router interface is used to route packets between multiple VLANs if the interface is configured with multiple subinterfaces. A separate subinterface is needed for each VLAN that will be routed. Because the router is performing all routing functions, a multilayer switch is not required.",
    "topic": "Inter-VLAN Routing",
    "id": 83
  },
  {
    "question": "An administrator was troubleshooting a router-on-a-stick topology and concluded that the problem was related to the configuration of VLANs on the router subinterfaces. Which two commands can the administrator use in the router to identify the problem? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "show ip interface"
      },
      {
        "id": "b",
        "text": "show ip protocols"
      },
      {
        "id": "c",
        "text": "show controllers"
      },
      {
        "id": "d",
        "text": "show running-config"
      },
      {
        "id": "e",
        "text": "show vlan"
      }
    ],
    "correctAnswer": [
      "a",
      "d"
    ],
    "officialKeyDisplay": "a) show ip interface; d) show running-config",
    "explanation": "The show ip interface and show running-config commands can be useful in troubleshooting routing issues like wrong VLAN IDs that are assigned to subinterfaces. The show controllers and show ip protocols commands do not display any information about VLANs. The show vlan command is not useful to show information about the router subinterfaces.",
    "topic": "Inter-VLAN Routing",
    "id": 84
  },
  {
    "question": "A router has two FastEthernet interfaces and needs to connect to four VLANs in the local network. How can this be accomplished using the fewest number of physical interfaces without unnecessarily decreasing network performance?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Add a second router to handle the inter-VLAN traffic."
      },
      {
        "id": "b",
        "text": "Implement a router-on-a-stick configuration."
      },
      {
        "id": "c",
        "text": "Interconnect the VLANs via the two additional FastEthernet interfaces."
      },
      {
        "id": "d",
        "text": "Use a hub to connect the four VLANS with a FastEthernet interface on the router."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Implement a router-on-a-stick configuration.",
    "explanation": "Using legacy inter-VLAN routing to interconnect four VLANs would require four separate physical interfaces. Therefore, the best router-based solution is to configure a router-on-a-stick.",
    "topic": "Inter-VLAN Routing",
    "id": 85
  },
  {
    "question": "What distinguishes traditional legacy inter-VLAN routing from router-on-a-stick?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Traditional routing is able to use only a single switch interface, whereas a router-on-a-stick can use multiple switch interfaces."
      },
      {
        "id": "b",
        "text": "Traditional routing requires a routing protocol, whereas a router-on-a-stick only needs to route directly connected networks."
      },
      {
        "id": "c",
        "text": "Traditional routing uses one port per logical network, whereas a router-on-a-stick uses subinterfaces to connect multiple logical networks to a single router port."
      },
      {
        "id": "d",
        "text": "Traditional routing uses multiple paths to the router and therefore requires STP, whereas router-on-a-stick does not provide multiple connections and therefore eliminates the need for STP."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) Traditional routing uses one port per logical network, whereas a router-on-a-stick uses subinterfaces to connect multiple logical networks to a single router port.",
    "explanation": "Router-on-a-stick requires one interface configured as subinterfaces for each VLAN.",
    "topic": "Inter-VLAN Routing",
    "id": 86
  },
  {
    "question": "Subinterface G0/1.10 on R1 must be configured as the default gateway for the VLAN 10 192.168.10.0/24 network. Which command should be configured on the subinterface to enable inter-VLAN routing for VLAN 10?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "encapsulation dot1q 10"
      },
      {
        "id": "b",
        "text": "encapsulation vlan 10"
      },
      {
        "id": "c",
        "text": "switchport mode access"
      },
      {
        "id": "d",
        "text": "switchport mode trunk"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) encapsulation dot1q 10",
    "explanation": "The subinterface must be assigned to VLAN 10 using the encapsulation dot1q 10 command. The encapsulation vlan 10 option is not a valid command and the switchport mode options are switch configuration commands.",
    "topic": "Inter-VLAN Routing",
    "id": 87
  },
  {
    "question": "What is important to consider while configuring the subinterfaces of a router when implementing inter-VLAN routing?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The IP address of each subinterface must be the default gateway address for each VLAN subnet."
      },
      {
        "id": "b",
        "text": "The no shutdown command must be given on each subinterface."
      },
      {
        "id": "c",
        "text": "The physical interface must have an IP address configured."
      },
      {
        "id": "d",
        "text": "The subinterface numbers must match the VLAN ID number."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) The IP address of each subinterface must be the default gateway address for each VLAN subnet.",
    "explanation": "host must have a default gateway configured. Hosts on VLANs must have their default gateway configured on a router subinterface to provide inter-VLAN routing services.",
    "topic": "Inter-VLAN Routing",
    "id": 88
  },
  {
    "question": "What are the steps that must be completed in order to enable inter-VLAN routing using router-on-a-stick?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Configure the physical interfaces on the router and enable a routing protocol."
      },
      {
        "id": "b",
        "text": "Create the VLANs on the router and define the port membership assignments on the switch."
      },
      {
        "id": "c",
        "text": "Create the VLANs on the switch to include port membership assignment and enable a routing protocol on the router."
      },
      {
        "id": "d",
        "text": "Create the VLANs on the switch to include port membership assignment and configure subinterfaces on the router matching the VLANs."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) Create the VLANs on the switch to include port membership assignment and configure subinterfaces on the router matching the VLANs.",
    "explanation": "The switch port must be configured as a trunk, and the VLANs on the switch must have users connected to them.",
    "topic": "Inter-VLAN Routing",
    "id": 89
  },
  {
    "question": "What two statements are true regarding the use of subinterfaces for inter-VLAN routing? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Fewer router Ethernet ports required than in traditional inter-VLAN routing"
      },
      {
        "id": "b",
        "text": "Less complex physical connection than in traditional inter-VLAN routing"
      },
      {
        "id": "c",
        "text": "More switch ports required than in traditional inter-VLAN routing"
      },
      {
        "id": "d",
        "text": "Simpler Layer 3 troubleshooting than with traditional inter-VLAN routing"
      },
      {
        "id": "e",
        "text": "Subinterfaces have no contention for bandwidth"
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) Fewer router Ethernet ports required than in traditional inter-VLAN routing; b) Less complex physical connection than in traditional inter-VLAN routing",
    "explanation": "Legacy (traditional) inter-VLAN routing would require more ports, and the configuration can be more complex than a router-on-a-stick solution.",
    "topic": "Inter-VLAN Routing",
    "id": 90
  },
  {
    "question": "Which router-on-a-stick command and prompt on R1 correctly encapsulates 802.1Q traffic for VLAN 20?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "R1(config-if)# encapsulation 802.1q 20"
      },
      {
        "id": "b",
        "text": "R1(config-if)# encapsulation dot1q 20"
      },
      {
        "id": "c",
        "text": "R1(config-subif)# encapsulation 802.1q 20"
      },
      {
        "id": "d",
        "text": "R1(config-subif)# encapsulation dot1q 20"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) R1(config-subif)# encapsulation dot1q 20",
    "explanation": "The encapsulation dot1q vlan_id [native] command configures the subinterface to respond to 802.1Q encapsulated traffic from the specified vlan-id. The native keyword option is only appended to set the native VLAN to something other than VLAN 1.",
    "topic": "Inter-VLAN Routing",
    "id": 91
  },
  {
    "question": "What are two disadvantages of using the router-on-a-stick inter-VLAN routing method in a large network? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "A dedicated router is required."
      },
      {
        "id": "b",
        "text": "It does not scale well."
      },
      {
        "id": "c",
        "text": "It requires multiple physical interfaces on a router."
      },
      {
        "id": "d",
        "text": "It requires subinterfaces to be configured on the same subnets."
      },
      {
        "id": "e",
        "text": "Multiple SVIs are needed."
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) A dedicated router is required.; b) It does not scale well.",
    "explanation": "The router-on-a-stick method requires one physical Ethernet router interface to route traffic between multiple VLANs on a network. The router interface is configured using software-based virtual subinterfaces to identify routable VLANs. Modern, enterprise networks rarely use router-on-a-stick because it does not scale easily to meet requirements, and multiple subinterfaces may impact the traffic flow speed. In these very large networks, network administrators use Layer 3 switches to configure inter-VLAN routing.",
    "topic": "Inter-VLAN Routing",
    "id": 92
  },
  {
    "question": "What is a characteristic of a routed port on a Layer 3 switch? (Choose two.)",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It requires the switchport mode access interface config command."
      },
      {
        "id": "b",
        "text": "It requires the no switchport interface config command."
      },
      {
        "id": "c",
        "text": "It requires the switchport access vlan vlan-id interface config command."
      },
      {
        "id": "d",
        "text": "It supports trunking."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) It requires the no switchport interface config command.",
    "explanation": "A routed port is created on a Layer 3 switch by disabling the switchport feature on a Layer 2 port using the no switchport interface configuration command. Then the interface can be configured with an IPv4 configuration to connect to a router or another Layer 3 switch. Only Layer 2 ports can be assigned to a VLAN or support trunking.",
    "topic": "Inter-VLAN Routing",
    "id": 93
  },
  {
    "question": "What are two advantages of using a Layer 3 switch with SVIs for inter-VLAN routing? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "A router is not required."
      },
      {
        "id": "b",
        "text": "It switches packets faster than using the router-on-a-stick method."
      },
      {
        "id": "c",
        "text": "SVIs can be bundled into EtherChannels."
      },
      {
        "id": "d",
        "text": "SVIs can be divided using subinterfaces."
      },
      {
        "id": "e",
        "text": "SVIs eliminate the need for a default gateway in the hosts."
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) A router is not required.; b) It switches packets faster than using the router-on-a-stick method.",
    "explanation": "Modern, enterprise networks rarely implement inter-VLAN routing using the router-on-a-stick method. Instead, they use faster Layer 3 switches because they use hardware-based switching to achieve higher-packet processing rates than routers. Layer 3 switches provide a much more scalable method to provide inter-VLAN routing.",
    "topic": "Inter-VLAN Routing",
    "id": 94
  },
  {
    "question": "Which port state will switch ports immediately transition to when configured for PortFast?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "forwarding"
      },
      {
        "id": "b",
        "text": "blocking"
      },
      {
        "id": "c",
        "text": "listening"
      },
      {
        "id": "d",
        "text": "learning"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) forwarding",
    "explanation": "PortFast allows a switch port to bypass the listening and learning states and transition immediately to the forwarding state.",
    "topic": "Redundant Networks",
    "id": 95
  },
  {
    "question": "After the election of the root bridge has been completed, how will switches find the best paths to the root bridge?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Each switch will analyze the port states of all neighbors and use the designated ports to forward traffic to the root."
      },
      {
        "id": "b",
        "text": "Each switch will analyze the sum of all port costs to reach the root and use the path with the lowest cost."
      },
      {
        "id": "c",
        "text": "Each switch will analyze the sum of the hops to reach the root and use the path with the fewest hops."
      },
      {
        "id": "d",
        "text": "Each switch will analyze the BID of all neighbors to reach the root and use the path through the lowest BID neighbors."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Each switch will analyze the sum of all port costs to reach the root and use the path with the lowest cost.",
    "explanation": "After the election of a root bridge has occurred, each switch will have to determine the best path to the root bridge from its location. The path is determined by summing the individual port costs along the path from each switch port to the root bridge.",
    "topic": "Redundant Networks",
    "id": 96
  },
  {
    "question": "Which is the default STP operation mode on Cisco Catalyst switches?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "MST"
      },
      {
        "id": "b",
        "text": "PVST+"
      },
      {
        "id": "c",
        "text": "Rapid PVST+"
      },
      {
        "id": "d",
        "text": "MSTP"
      },
      {
        "id": "e",
        "text": "RSTP"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) PVST+",
    "explanation": "Cisco switches running IOS 15.0 or later run PVST+ by default. Cisco Catalyst switches support PVST+, Rapid PVST+, and MSTP. However, only one version can be active at any time.",
    "topic": "Redundant Networks",
    "id": 97
  },
  {
    "question": "What value determines the root bridge when all switches connected by trunk links have default STP configurations?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "VLAN ID"
      },
      {
        "id": "b",
        "text": "MAC address"
      },
      {
        "id": "c",
        "text": "extended system ID"
      },
      {
        "id": "d",
        "text": "bridge priority"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) MAC address",
    "explanation": "When all switches are configured with the same default bridge priority, the MAC address becomes the deciding factor for the election of the root bridge. All links on the same VLAN will also have the same extended system ID so this will not contribute to determine which switch is the root for that VLAN.",
    "topic": "Redundant Networks",
    "id": 98
  },
  {
    "question": "During the implementation of Spanning Tree Protocol, all switches are rebooted by the network administrator. What is the first step of the spanning-tree election process?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "All the switches send out BPDUs advertising themselves as the root bridge."
      },
      {
        "id": "b",
        "text": "Each switch determines the best path to forward traffic."
      },
      {
        "id": "c",
        "text": "Each switch determines what port to block to prevent a loop from occurring."
      },
      {
        "id": "d",
        "text": "Each switch with a lower root ID than its neighbor will not send BPDUs."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) All the switches send out BPDUs advertising themselves as the root bridge.",
    "explanation": "After a Cisco switch boots, it will send out BPDUs containing its individual BID and the root ID for the network. By default, the initial root ID at bootup will be the ID of that individual switch. After a root bridge is elected, port states and paths are chosen.",
    "topic": "Redundant Networks",
    "id": 99
  },
  {
    "question": "Which two concepts relate to a switch port that is intended to have only end devices attached and intended never to be used to connect to another switch? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "bridge ID"
      },
      {
        "id": "b",
        "text": "PortFast"
      },
      {
        "id": "c",
        "text": "edge port"
      },
      {
        "id": "d",
        "text": "extended system ID"
      },
      {
        "id": "e",
        "text": "PVST+"
      }
    ],
    "correctAnswer": [
      "b",
      "c"
    ],
    "officialKeyDisplay": "b) PortFast; c) edge port",
    "explanation": "The RSTP edge port concept corresponds to the PVST+ PortFast feature. An edge port connects to an end station and assumes that the switch port does not connect to another switch. RSTP edge ports should immediately transition to the forwarding state, thereby skipping the time-consuming 802.1D listening and learning port states. PVST+ is the default spanning-tree configuration for a Cisco Catalyst switch. The bridge ID (BID) is used to determine the root bridge on a network and includes the bridge priority, the extended system ID, and the MAC address.",
    "topic": "Redundant Networks",
    "id": 100
  },
  {
    "question": "Which three port states are used by Rapid PVST+? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "listening"
      },
      {
        "id": "b",
        "text": "blocking"
      },
      {
        "id": "c",
        "text": "trunking"
      },
      {
        "id": "d",
        "text": "learning"
      },
      {
        "id": "e",
        "text": "forwarding"
      },
      {
        "id": "f",
        "text": "discarding"
      }
    ],
    "correctAnswer": [
      "d",
      "e",
      "f"
    ],
    "officialKeyDisplay": "d) learning; e) forwarding; f) discarding",
    "explanation": "The Rapid PVST+ port states are discarding, learning, and forwarding.",
    "topic": "Redundant Networks",
    "id": 101
  },
  {
    "question": "When PVST is running over a switched network, which port state can participate in BPDU frame forwarding based on BPDUs received, but does not forward data frames?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "disabled"
      },
      {
        "id": "b",
        "text": "forwarding"
      },
      {
        "id": "c",
        "text": "listening"
      },
      {
        "id": "d",
        "text": "blocking"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) listening",
    "explanation": "Ports in the blocking state are nondesignated ports and do not participate in frame forwarding. Ports in the listening state can participate in BPDU frame forwarding according to received BPDU frames, but do not forward data frames. Ports in the forwarding state forward data frames and send and receive BPDU frames. Ports in the disabled state are administratively disabled.",
    "topic": "Redundant Networks",
    "id": 102
  },
  {
    "question": "Which STP port role is adopted by a switch port if there is no other port with a lower cost to the root bridge?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "designated port"
      },
      {
        "id": "b",
        "text": "alternate"
      },
      {
        "id": "c",
        "text": "disabled port"
      },
      {
        "id": "d",
        "text": "root port"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) root port",
    "explanation": "The root port is the port with the lowest cost to reach the root bridge.",
    "topic": "Redundant Networks",
    "id": 103
  },
  {
    "question": "Which two statements describe a switch port that is configured with PortFast? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "The switch port immediately transitions from the listening to the forwarding state."
      },
      {
        "id": "b",
        "text": "The switch port immediately transitions from blocking to the forwarding state."
      },
      {
        "id": "c",
        "text": "The switch port sends DHCP requests before transitioning to the forwarding state."
      },
      {
        "id": "d",
        "text": "The switch port immediately processes any BPDUs before transitioning to the forwarding state."
      },
      {
        "id": "e",
        "text": "The switch port should never receive BPDUs."
      }
    ],
    "correctAnswer": [
      "b",
      "e"
    ],
    "officialKeyDisplay": "b) The switch port immediately transitions from blocking to the forwarding state.; e) The switch port should never receive BPDUs.",
    "explanation": "A port that is configured with PortFast will immediately transition from blocking to the forwarding state. PortFast should only be configured on switch ports that support end devices, so no BPDUs should ever be received through a port that is configured with PortFast. Configuring a port with PortFast supports DHCP because PortFast will speed up the transition from blocking to forwarding. Without PortFast, an end device may begin to issue DHCP requests before the port has transitioned to the forwarding state.",
    "topic": "Redundant Networks",
    "id": 104
  },
  {
    "question": "What is one way to correct a spanning tree failure?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Replace the cables on failed STP links."
      },
      {
        "id": "b",
        "text": "Manually remove redundant links in the switched network."
      },
      {
        "id": "c",
        "text": "Insert redundant links to replace the failed STP links."
      },
      {
        "id": "d",
        "text": "Replace all instances of STP with RSTP."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Manually remove redundant links in the switched network.",
    "explanation": "An action that can be taken when there is a spanning tree failure in a Layer 2 network is to remove all redundant links in the failed segment of the network. This will eliminate the loops in the topology allowing for a normalization of the traffic and CPU loads. The next step would be to investigate the failure of STP on the redundant links and fix these issues prior to restoring these links.",
    "topic": "Redundant Networks",
    "id": 105
  },
  {
    "question": "What additional information is contained in the 12-bit extended system ID of a BPDU?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "port ID"
      },
      {
        "id": "b",
        "text": "MAC address"
      },
      {
        "id": "c",
        "text": "IP address"
      },
      {
        "id": "d",
        "text": "VLAN ID"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) VLAN ID",
    "explanation": "The BPDU has three fields; the bridge priority, the extended system ID, and the MAC address. The extended system ID contains 12 bits that identify the VLAN ID.",
    "topic": "Redundant Networks",
    "id": 106
  },
  {
    "question": "An administrator is troubleshooting a switch and wants to verify if it is a root bridge. What command can be used to do this?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "show spanning-tree"
      },
      {
        "id": "b",
        "text": "show running-config"
      },
      {
        "id": "c",
        "text": "show vlan"
      },
      {
        "id": "d",
        "text": "show startup-config"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) show spanning-tree",
    "explanation": "Of all the commands that are listed, only the correct option, show spanning-tree, displays STP root bridge information.",
    "topic": "Redundant Networks",
    "id": 107
  },
  {
    "question": "What is an accurate description of redundancy?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "designing a network to use multiple virtual devices to ensure that all traffic uses the best path through the internetwork"
      },
      {
        "id": "b",
        "text": "configuring a router with a complete MAC address database to ensure that all frames can be forwarded to the correct destination"
      },
      {
        "id": "c",
        "text": "designing a network to use multiple paths between switches to ensure there is no single point of failure"
      },
      {
        "id": "d",
        "text": "configuring a switch with proper security to ensure that all traffic forwarded through an interface is filtered"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) designing a network to use multiple paths between switches to ensure there is no single point of failure",
    "explanation": "Redundancy attempts to remove any single point of failure in a network by using multiple physically cabled paths between switches in the network.",
    "topic": "Redundant Networks",
    "id": 108
  },
  {
    "question": "Which three components are combined to form a bridge ID? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Bridge priority"
      },
      {
        "id": "b",
        "text": "Cost"
      },
      {
        "id": "c",
        "text": "Extended system ID"
      },
      {
        "id": "d",
        "text": "IP address"
      },
      {
        "id": "e",
        "text": "MAC address"
      },
      {
        "id": "f",
        "text": "Port ID"
      }
    ],
    "correctAnswer": [
      "a",
      "c",
      "e"
    ],
    "officialKeyDisplay": "a) Bridge priority; c) Extended system ID; e) MAC address",
    "explanation": "The three components that are combined to form a bridge ID are bridge priority, extended system ID, and MAC address.",
    "topic": "Redundant Networks",
    "id": 109
  },
  {
    "question": "What is an advantage of PVST+?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "PVST+ optimizes performance on the network through automatic selection of the root bridge."
      },
      {
        "id": "b",
        "text": "PVST+ optimizes performance on the network through load sharing using multiple root bridges."
      },
      {
        "id": "c",
        "text": "PVST+ reduces bandwidth consumption compared to traditional implementations of STP that use CST."
      },
      {
        "id": "d",
        "text": "PVST+ requires fewer CPU cycles for all the switches in the network."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) PVST+ optimizes performance on the network through load sharing using multiple root bridges.",
    "explanation": "PVST+ results in optimum load balancing. However, this is accomplished by manually configuring switches to be elected as root bridges for different VLANs on the network. The root bridges are not automatically selected. Furthermore, having spanning tree instances for each VLAN actually consumes more bandwidth, and it increases the CPU cycles for all the switches in the network.",
    "topic": "Redundant Networks",
    "id": 110
  },
  {
    "question": "In which two port states does a switch learn MAC addresses and process BPDUs in a PVST network? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Blocking"
      },
      {
        "id": "b",
        "text": "Disabled"
      },
      {
        "id": "c",
        "text": "Forwarding"
      },
      {
        "id": "d",
        "text": "Learning"
      },
      {
        "id": "e",
        "text": "Listening"
      }
    ],
    "correctAnswer": [
      "c",
      "d"
    ],
    "officialKeyDisplay": "c) Forwarding; d) Learning",
    "explanation": "Switches learn MAC addresses at the learning and forwarding port states. They receive and process BPDUs at the blocking, listening, learning, and forwarding port states.",
    "topic": "Redundant Networks",
    "id": 111
  },
  {
    "question": "What two features does Spanning Tree Protocol (STP) provide to ensure proper network operations? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Implementing VLANs to contain broadcasts"
      },
      {
        "id": "b",
        "text": "Link-state dynamic routing that provides redundant routes"
      },
      {
        "id": "c",
        "text": "Redundant links between Layer 2 switches"
      },
      {
        "id": "d",
        "text": "Removing single points of failure with multiple Layer 2 switches"
      },
      {
        "id": "e",
        "text": "Static default routes"
      }
    ],
    "correctAnswer": [
      "c",
      "d"
    ],
    "officialKeyDisplay": "c) Redundant links between Layer 2 switches; d) Removing single points of failure with multiple Layer 2 switches",
    "explanation": "Spanning Tree Protocol (STP) is required to ensure correct network operation when designing a network with multiple interconnected Layer 2 switches or using redundant links to eliminate single points of failure between Layer 2 switches. Routing is a Layer 3 function and does not relate to STP. VLANs do reduce the number of broadcast domains but relate to Layer 3 subnets, not STP.",
    "topic": "Redundant Networks",
    "id": 112
  },
  {
    "question": "Which PVST+ feature ensures that configured switch edge ports do not cause Layer 2 loops if a port is mistakenly connected to another switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "BPDU guard"
      },
      {
        "id": "b",
        "text": "Extended system ID"
      },
      {
        "id": "c",
        "text": "PortFast"
      },
      {
        "id": "d",
        "text": "PVST+"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) BPDU guard",
    "explanation": "If switch access ports are configured as edge ports using PortFast, BPDUs should never be received on those ports. Cisco switches support a feature called BPDU guard. When it is enabled, BPDU guard will put an edge port in an error-disabled state if a BPDU is received by the port. This will prevent a Layer 2 loop occurring.",
    "topic": "Redundant Networks",
    "id": 113
  },
  {
    "question": "What is an advantage of using STP in a LAN?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It combines multiple switch trunk links into a logical port channel link to increase bandwidth."
      },
      {
        "id": "b",
        "text": "It decreases the size of the failure domain."
      },
      {
        "id": "c",
        "text": "It provides firewall services to protect the LAN."
      },
      {
        "id": "d",
        "text": "It temporarily disables redundant paths to stop Layer 2 loops."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It temporarily disables redundant paths to stop Layer 2 loops.",
    "explanation": "STP allows redundant physical connections between Layer 2 devices without creating Layer 2 loops by disabling ports that could create a loop.",
    "topic": "Redundant Networks",
    "id": 114
  },
  {
    "question": "Which two statements regarding a PortFast enabled switch port are true? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "The port immediately transitions from blocking to forwarding state."
      },
      {
        "id": "b",
        "text": "The port immediately transitions from listening to forwarding state."
      },
      {
        "id": "c",
        "text": "The port immediately processes any BPDUs before transitioning to the forwarding state."
      },
      {
        "id": "d",
        "text": "The port sends DHCP requests before transitioning to the forwarding state."
      },
      {
        "id": "e",
        "text": "The port should never receive BPDUs."
      }
    ],
    "correctAnswer": [
      "a",
      "e"
    ],
    "officialKeyDisplay": "a) The port immediately transitions from blocking to forwarding state.; e) The port should never receive BPDUs.",
    "explanation": "PortFast-enabled ports immediately transition from blocking to forwarding state. PortFast should be enabled only on access ports connecting end devices. No BPDUs should ever be received through a port that is configured with PortFast.",
    "topic": "Redundant Networks",
    "id": 115
  },
  {
    "question": "An EtherChannel link using LACP was formed between two switches, S1 and S2. While verifying the configuration, which mode combination could be utilized on both switches?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "S1-passive and S2-passive"
      },
      {
        "id": "b",
        "text": "S1-on and S2-active"
      },
      {
        "id": "c",
        "text": "S1-on and S2-passive"
      },
      {
        "id": "d",
        "text": "S1-passive and S2-active"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) S1-passive and S2-active",
    "explanation": "An EtherChannel link will be formed using LACP when both switches are in on mode or in active mode, or when one of them is in passive mode and the other is in active mode.",
    "topic": "EtherChannel",
    "id": 116
  },
  {
    "question": "When a range of ports is being configured for EtherChannel, which mode will configure PAgP so that it initiates the EtherChannel negotiation?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "active"
      },
      {
        "id": "b",
        "text": "desirable"
      },
      {
        "id": "c",
        "text": "passive"
      },
      {
        "id": "d",
        "text": "auto"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) desirable",
    "explanation": "The command channel-group mode active enables LACP unconditionally, and the command channel-group mode passive enables LACP only if the port receives an LACP packet from another device. The command channel-group mode desirable enables PAgP unconditionally, and the command channel-group mode auto enables PAgP only if the port receives a PAgP packet from another device.",
    "topic": "EtherChannel",
    "id": 117
  },
  {
    "question": "Which three interface parameters must match for an EtherChannel to form? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "PortFast mode"
      },
      {
        "id": "b",
        "text": "spanning-tree state"
      },
      {
        "id": "c",
        "text": "allowed VLANs"
      },
      {
        "id": "d",
        "text": "native VLAN"
      },
      {
        "id": "e",
        "text": "EtherChannel mode"
      },
      {
        "id": "f",
        "text": "trunking mode"
      }
    ],
    "correctAnswer": [
      "c",
      "d",
      "f"
    ],
    "officialKeyDisplay": "c) allowed VLANs; d) native VLAN; f) trunking mode",
    "explanation": "There are some EtherChannel modes that can be different and an EtherChannel will form, such as auto/desirable and active/passive. A port that is currently in the spanning tree blocking mode or has been configured for PortFast can still be used to form an EtherChannel.",
    "topic": "EtherChannel",
    "id": 118
  },
  {
    "question": "What are three advantages of using EtherChannel technology? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Configuration tasks can be done on the EtherChannel interface."
      },
      {
        "id": "b",
        "text": "A spanning tree recalculation is not required when a single link within the channel goes down."
      },
      {
        "id": "c",
        "text": "The Spanning Tree Protocol shuts down the unused interfaces in the bundle to avoid loops."
      },
      {
        "id": "d",
        "text": "There is no need to upgrade links to faster connections to increase bandwidth."
      },
      {
        "id": "e",
        "text": "EtherChannel uses multiple logical links to provide redundancy."
      },
      {
        "id": "f",
        "text": "Load balancing is not needed with EtherChannel."
      }
    ],
    "correctAnswer": [
      "a",
      "b",
      "d"
    ],
    "officialKeyDisplay": "a) Configuration tasks can be done on the EtherChannel interface.; b) A spanning tree recalculation is not required when a single link within the channel goes down.; d) There is no need to upgrade links to faster connections to increase bandwidth.",
    "explanation": "Most configuration tasks can be done on the EtherChannel interface, rather than on individual ports. Existing ports can be used, eliminating the need to upgrade ports to faster speeds. Spanning Tree Protocol runs on EtherChannel links in the same manner as it does on regular links, but it does not recalculate when an individual link within the channel goes down. EtherChannel also supports load balancing.",
    "topic": "EtherChannel",
    "id": 119
  },
  {
    "question": "A network administrator is configuring an EtherChannel link between two physical ports on a switch. Which statement describes the result when one of the physical ports fails?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An STP recalculation is needed."
      },
      {
        "id": "b",
        "text": "The EtherChannel link fails."
      },
      {
        "id": "c",
        "text": "The EtherChannel stops transmitting data until it is restarted."
      },
      {
        "id": "d",
        "text": "The EtherChannel continues transmitting data with reduced bandwidth."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) The EtherChannel continues transmitting data with reduced bandwidth.",
    "explanation": "An EtherChannel is seen as one logical connection. The loss of one physical link within the channel does not create a change in the topology and therefore a spanning tree recalculation is not required. When one of the member ports in the EtherChannel fails, the EtherChannel link remains functional, although its overall throughput decreases because of a lost link within the EtherChannel.",
    "topic": "EtherChannel",
    "id": 120
  },
  {
    "question": "When EtherChannel is implemented, multiple physical interfaces are bundled into which type of logical connection?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "port channel"
      },
      {
        "id": "b",
        "text": "loopback"
      },
      {
        "id": "c",
        "text": "VLAN interface"
      },
      {
        "id": "d",
        "text": "interface range"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) port channel",
    "explanation": "When EtherChannel is being configured, the first step is to specify what physical ports will be used in an EtherChannel group. The second step is to create the logical EtherChannel port channel interface which contains the group of physical interfaces.",
    "topic": "EtherChannel",
    "id": 121
  },
  {
    "question": "When a range of ports is being configured for EtherChannel by the use of PAgP, which mode will form the bundled channel only if the port receives PAgP packets from another device?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "desirable"
      },
      {
        "id": "b",
        "text": "active"
      },
      {
        "id": "c",
        "text": "auto"
      },
      {
        "id": "d",
        "text": "passive"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) auto",
    "explanation": "The command channel-group mode active enables LACP unconditionally, and the command channel-group mode passive enables LACP only if the port receives an LACP packet from another device. The command channel-group mode desirable enables PAgP unconditionally, and the command channel-group mode auto enables PAgP only if the port receives a PAgP packet from another device.",
    "topic": "EtherChannel",
    "id": 122
  },
  {
    "question": "Which two load balancing methods can be implemented with EtherChannel technology? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "source IP to destination IP"
      },
      {
        "id": "b",
        "text": "source MAC to destination MAC"
      },
      {
        "id": "c",
        "text": "destination IP to destination MAC"
      },
      {
        "id": "d",
        "text": "destination MAC to source MAC"
      },
      {
        "id": "e",
        "text": "destination IP to source IP"
      },
      {
        "id": "f",
        "text": "destination MAC to destination IP"
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) source IP to destination IP; b) source MAC to destination MAC",
    "explanation": "Source MAC to destination MAC load balancing and source IP to destination IP load balancing are two implementation methods used in EtherChannel technology.",
    "topic": "EtherChannel",
    "id": 123
  },
  {
    "question": "Which function is provided by EtherChannel?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "enabling traffic from multiple VLANs to travel over a single Layer 2 link"
      },
      {
        "id": "b",
        "text": "spreading traffic across multiple physical WAN links"
      },
      {
        "id": "c",
        "text": "dividing the bandwidth of a single link into separate time slots"
      },
      {
        "id": "d",
        "text": "creating one logical link by using multiple physical links between two LAN switches"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) creating one logical link by using multiple physical links between two LAN switches",
    "explanation": "EtherChannel technology allows the grouping, or aggregating, of several Fast Ethernet or Gigabit switch ports into one logical channel.",
    "topic": "EtherChannel",
    "id": 124
  },
  {
    "question": "Which statement is true about EtherChannel technology?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "All configuration tasks must be done on the individual ports in the EtherChannel link."
      },
      {
        "id": "b",
        "text": "STP does not run on redundant EtherChannel links."
      },
      {
        "id": "c",
        "text": "EtherChannel uses existing switch ports."
      },
      {
        "id": "d",
        "text": "Links must be upgraded to support EtherChannel."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) EtherChannel uses existing switch ports.",
    "explanation": "EtherChannel relies on existing switch ports, so there is no need to upgrade the links. Some configuration tasks are done on individual ports and some configuration tasks are done on the EtherChannel group. STP operates on EtherChannel in the same manner as it does on other redundant links.",
    "topic": "EtherChannel",
    "id": 125
  },
  {
    "question": "Which two mode combinations would result in the successful negotiation of an EtherChannel? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "active; on"
      },
      {
        "id": "b",
        "text": "passive; auto"
      },
      {
        "id": "c",
        "text": "desirable; desirable"
      },
      {
        "id": "d",
        "text": "desirable; active"
      },
      {
        "id": "e",
        "text": "active; passive"
      },
      {
        "id": "f",
        "text": "auto; auto"
      }
    ],
    "correctAnswer": [
      "c",
      "e"
    ],
    "officialKeyDisplay": "c) desirable; desirable; e) active; passive",
    "explanation": "The combinations of modes that will form an EtherChannel are as follows: on/on, active/passive, active/active, desirable/auto, and desirable/desirable.",
    "topic": "EtherChannel",
    "id": 126
  },
  {
    "question": "Which two protocols are link aggregation protocols? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "EtherChannel"
      },
      {
        "id": "b",
        "text": "STP"
      },
      {
        "id": "c",
        "text": "PAgP"
      },
      {
        "id": "d",
        "text": "802.3ad"
      },
      {
        "id": "e",
        "text": "RSTP"
      }
    ],
    "correctAnswer": [
      "c",
      "d"
    ],
    "officialKeyDisplay": "c) PAgP; d) 802.3ad",
    "explanation": "The two protocols that can be used to form an EtherChannel are PAgP (Cisco proprietary) and LACP, also know as IEEE 802.3ad. STP (Spanning Tree Protocol) or RSTP (Rapid Spanning Tree Protocol) is used to avoid loops in a Layer 2 network. EtherChannel is the term that describes the bundling of two or more links that are treated as a single link for spanning tree and configuration.",
    "topic": "EtherChannel",
    "id": 127
  },
  {
    "question": "When a range of ports is being configured for EtherChannel, which mode will configure LACP so that it initiates the EtherChannel negotiation?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "active"
      },
      {
        "id": "b",
        "text": "auto"
      },
      {
        "id": "c",
        "text": "desirable"
      },
      {
        "id": "d",
        "text": "passive"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) active",
    "explanation": "The command channel-group mode active enables LACP unconditionally, and the command channel-group mode passive enables LACP only if the port receives an LACP packet from another device. The command channel-group mode desirable enables PAgP unconditionally, and the command channel-group mode auto enables PAgP only if the port receives a PAgP packet from another device.",
    "topic": "EtherChannel",
    "id": 128
  },
  {
    "question": "What will happen if a network administrator puts a port that is part of an EtherChannel bundle into a different VLAN than the other ports in that bundle?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The EtherChannel will fail."
      },
      {
        "id": "b",
        "text": "The EtherChannel bundle will stay up if the ports were configured with no negotiation between the switches to form the EtherChannel."
      },
      {
        "id": "c",
        "text": "The EtherChannel bundle will stay up if either PAgP or LACP is used."
      },
      {
        "id": "d",
        "text": "The EtherChannel bundle will stay up only if LACP is used."
      },
      {
        "id": "e",
        "text": "The EtherChannel bundle will stay up only if PAgP is used."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) The EtherChannel will fail.",
    "explanation": "All ports in an EtherChannel bundle must either be trunk ports or be access ports in the same VLAN. If VLAN pruning is enabled on the trunk, the allowed VLANs must be the same on both sides of the EtherChannel.",
    "topic": "EtherChannel",
    "id": 129
  },
  {
    "question": "When a range of ports is being configured for EtherChannel, which mode will configure LACP on a port only if the port receives LACP packets from another device?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "auto"
      },
      {
        "id": "b",
        "text": "passive"
      },
      {
        "id": "c",
        "text": "desirable"
      },
      {
        "id": "d",
        "text": "active"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) passive",
    "explanation": "The command channel-group mode active enables LACP unconditionally, and the command channel-group mode passive enables LACP only if the port receives an LACP packet from another device. The command channel-group mode desirable enables PAgP unconditionally, and the command channel-group mode auto enables PAgP only if the port receives a PAgP packet from another device.",
    "topic": "EtherChannel",
    "id": 130
  },
  {
    "question": "There has been an increase in network traffic between two Catalyst 2960 switches, and their FastEthernet trunk link has reached its capacity. How can traffic flow be improved?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Add routers between the switches to create additional broadcast domains."
      },
      {
        "id": "b",
        "text": "Bundle physical ports using EtherChannel."
      },
      {
        "id": "c",
        "text": "Configure smaller VLANs to decrease the size of the collision domain."
      },
      {
        "id": "d",
        "text": "Increase the speed of the ports using the bandwidth command."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Bundle physical ports using EtherChannel.",
    "explanation": "Increasing the link speed does not scale very well. Adding more VLANs will not reduce the amount of traffic that is flowing across the link. Inserting a router between the switches will not improve congestion.",
    "topic": "EtherChannel",
    "id": 131
  },
  {
    "question": "Which statement is true regarding the use of PAgP to create EtherChannels?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It increases the number of ports that are participating in spanning tree."
      },
      {
        "id": "b",
        "text": "It is Cisco proprietary."
      },
      {
        "id": "c",
        "text": "It mandates that an even number of ports (2, 4, 6, etc.) be used for aggregation."
      },
      {
        "id": "d",
        "text": "It requires full duplex."
      },
      {
        "id": "e",
        "text": "It requires more physical links than LACP does"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) It is Cisco proprietary.",
    "explanation": "PAgP is used to automatically aggregate multiple ports into an EtherChannel bundle, but it works only between Cisco devices. LACP can be used for the same purpose between Cisco and non-Cisco devices. PAgP must have the same duplex mode at both ends and can use two ports or more. The number of ports depends on the switch platform or module. An EtherChannel aggregated link is seen as one port by the spanning tree algorithm.",
    "topic": "EtherChannel",
    "id": 132
  },
  {
    "question": "Which combination of channel-group modes will establish an EtherChannel?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Switch 1 set to auto; switch 2 set to auto."
      },
      {
        "id": "b",
        "text": "Switch 1 set to auto; switch 2 set to on."
      },
      {
        "id": "c",
        "text": "Switch 1 set to desirable; switch 2 set to desirable."
      },
      {
        "id": "d",
        "text": "Switch 1 set to on; switch 2 set to desirable."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) Switch 1 set to desirable; switch 2 set to desirable.",
    "explanation": "Switch 1 and switch 2 will establish an EtherChannel if both sides are set to desirable, because both sides will negotiate the link. A channel can also be established if both sides are set to on, or if one side is set to auto and the other to desirable. Setting one switch to on will prevent that switch from negotiating the formation of an EtherChannel bundle.",
    "topic": "EtherChannel",
    "id": 133
  },
  {
    "question": "Which interface configuration command will enable the port to initiate an LACP EtherChannel?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "channel-group mode active"
      },
      {
        "id": "b",
        "text": "channel-group mode auto"
      },
      {
        "id": "c",
        "text": "channel-group mode desirable"
      },
      {
        "id": "d",
        "text": "channel-group mode on"
      },
      {
        "id": "e",
        "text": "channel-group mode passive"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) channel-group mode active",
    "explanation": "The channel-group mode active command enables LACP unconditionally, and the channel-group mode passive command enables LACP only if the port receives an LACP packet from another device. The channel-group mode desirable command enables PAgP unconditionally, and the channel-group mode auto command enables PAgP only if the port receives a PAgP packet from another device.",
    "topic": "EtherChannel",
    "id": 134
  },
  {
    "question": "Which interface configuration command will enable the port to establish an EtherChannel only if it receives PAgP packets from the other switch?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "channel-group mode active"
      },
      {
        "id": "b",
        "text": "channel-group mode auto"
      },
      {
        "id": "c",
        "text": "channel-group mode desirable"
      },
      {
        "id": "d",
        "text": "channel-group mode on"
      },
      {
        "id": "e",
        "text": "channel-group mode passive"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) channel-group mode auto",
    "explanation": "The channel-group mode active command enables LACP unconditionally, and the channel-group mode passive command enables LACP only if the port receives an LACP packet from another device. The channel-group mode desirable command enables PAgP unconditionally, and the channel-group mode auto command enables PAgP only if the port receives a PAgP packet from another device.",
    "topic": "EtherChannel",
    "id": 135
  },
  {
    "question": "Which statement describes a characteristic of EtherChannel?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can combine up to a maximum of 4 physical links."
      },
      {
        "id": "b",
        "text": "It can bundle mixed types of 100 Mbps and 1 Gbps Ethernet links."
      },
      {
        "id": "c",
        "text": "It consists of multiple parallel links between a switch and a router."
      },
      {
        "id": "d",
        "text": "It is made by combining multiple physical links that are seen as one link between two switches."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It is made by combining multiple physical links that are seen as one link between two switches.",
    "explanation": "An EtherChannel is formed by combining multiple (same type) Ethernet physical links so they are seen and configured as one logical link. It provides an aggregated link between two switches. Currently each EtherChannel can consist of up to eight compatibly configured Ethernet ports.",
    "topic": "EtherChannel",
    "id": 136
  },
  {
    "question": "What are two advantages of using LACP? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "LACP allows automatic formation of EtherChannel links."
      },
      {
        "id": "b",
        "text": "LACP allows use of multivendor devices."
      },
      {
        "id": "c",
        "text": "LACP decreases the amount of configuration that is needed on a switch for EtherChannel."
      },
      {
        "id": "d",
        "text": "LACP eliminates the need for the Spanning Tree Protocol."
      },
      {
        "id": "e",
        "text": "LACP increases redundancy to Layer 3 devices."
      },
      {
        "id": "f",
        "text": "LACP provides a simulated environment for testing link aggregation."
      }
    ],
    "correctAnswer": [
      "a",
      "b"
    ],
    "officialKeyDisplay": "a) LACP allows automatic formation of EtherChannel links.; b) LACP allows use of multivendor devices.",
    "explanation": "LACP is part of an IEEE specification (802.3ad) that enables several physical ports to automatically be bundled to form a single EtherChannel logical channel. LACP allows a switch to negotiate an automatic bundle by sending LACP packets to the peer. It performs a function similar to PAgP with Cisco EtherChannel, but it can be used to facilitate EtherChannels in multivendor environments. Cisco devices support both PAgP and LACP configurations.",
    "topic": "EtherChannel",
    "id": 137
  },
  {
    "question": "Which three settings must match in order for switch ports to form an EtherChannel? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Non-trunk ports must belong to the same VLAN."
      },
      {
        "id": "b",
        "text": "Port security violation settings on interconnecting ports must match."
      },
      {
        "id": "c",
        "text": "The duplex settings on interconnecting ports must match."
      },
      {
        "id": "d",
        "text": "The port channel group number on interconnecting switches must match."
      },
      {
        "id": "e",
        "text": "The SNMP community strings must match."
      },
      {
        "id": "f",
        "text": "The speed settings on interconnecting ports must match."
      }
    ],
    "correctAnswer": [
      "a",
      "c",
      "f"
    ],
    "officialKeyDisplay": "a) Non-trunk ports must belong to the same VLAN.; c) The duplex settings on interconnecting ports must match.; f) The speed settings on interconnecting ports must match.",
    "explanation": "Speed and duplex settings must match for all interfaces in an EtherChannel. All interfaces in the EtherChannel must be in the same VLAN if the ports are not configured as trunks. Any ports may be used to establish an EtherChannel. SNMP community strings and port security settings are not relevant to EtherChannel.",
    "topic": "EtherChannel",
    "id": 138
  },
  {
    "question": "A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "DHCPNAK"
      },
      {
        "id": "b",
        "text": "DHCPREQUEST"
      },
      {
        "id": "c",
        "text": "DHCPOFFER"
      },
      {
        "id": "d",
        "text": "DHCPACK"
      },
      {
        "id": "e",
        "text": "DHCPDISCOVER"
      }
    ],
    "correctAnswer": [
      "b",
      "e"
    ],
    "officialKeyDisplay": "b) DHCPREQUEST; e) DHCPDISCOVER",
    "explanation": "All DHCP messages between a DHCP-enabled client and a DHCP server are using broadcast messages until after the DHCPACK message. The DHCPDISCOVER and DHCPREQUEST messages are the only messages that are sent by a DHCP-enabled client. All DHCP messages between a DHCP-enabled client and a DHCP server use broadcast messages when the client is obtaining a lease for the first time.",
    "topic": "DHCPv4",
    "id": 139
  },
  {
    "question": "An administrator issues the commands: Copy Router(config)# interface g0/1 Router(config-if)# ip address dhcp What is the administrator trying to achieve?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "configuring the router to act as a DHCPv4 server"
      },
      {
        "id": "b",
        "text": "configuring the router to act as a relay agent"
      },
      {
        "id": "c",
        "text": "configuring the router to resolve IP address conflicts"
      },
      {
        "id": "d",
        "text": "configuring the router to obtain IP parameters from a DHCPv4 server"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) configuring the router to obtain IP parameters from a DHCPv4 server",
    "explanation": "The ip address dhcp command activates the DHCPv4 client on a given interface. By doing this, the router will obtain the IP parameters from a DHCPv4 server.",
    "topic": "DHCPv4",
    "id": 140
  },
  {
    "question": "When a client is requesting an initial address lease from a DHCP server, why is the DHCPREQUEST message sent as a broadcast?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The client does not yet know the IP address of the DHCP server that sent the offer."
      },
      {
        "id": "b",
        "text": "The client may have received offers from multiple servers, and the broadcast serves to implicitly decline those other offers."
      },
      {
        "id": "c",
        "text": "The client does not have a MAC address assigned yet, so it cannot send a unicast message at Layer 2."
      },
      {
        "id": "d",
        "text": "The DHCP server may be on a different subnet, so the request must be sent as a broadcast."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) The client does not yet know the IP address of the DHCP server that sent the offer.",
    "explanation": "During the initial DHCP exchange between a client and server, the client broadcasts a DHCPDISCOVER message looking for DHCP servers. Multiple servers may be configured to respond to this request with DHCPOFFER messages. The client will choose the lease from one of the servers by sending a DHCPREQUEST message. It sends this message as a broadcast so that the other DHCP servers that sent offers will know that their offers were declined and the corresponding address can go back into the pool.",
    "topic": "DHCPv4",
    "id": 141
  },
  {
    "question": "Which DHCP IPv4 message contains the following information? Destination address: 255.255.255.255 Client IPv4 address: 0.0.0.0 Default gateway address: 0.0.0.0 Subnet mask: 0.0.0.0",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DHCPDISCOVER"
      },
      {
        "id": "b",
        "text": "DHCPOFFER"
      },
      {
        "id": "c",
        "text": "DHCPACK"
      },
      {
        "id": "d",
        "text": "DHCPREQUEST"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) DHCPDISCOVER",
    "explanation": "A client will first send the DHCPDISCOVER broadcast message to find DHCPv4 servers on the network. This message will have the limited broadcast address, 255.255.255.255, as the destination address. The client IPv4 address, the default gateway address, and subnet fields will all be 0.0.0.0 because these have not yet been configured on the client. When the DHCPv4 server receives a DHCPDISCOVER message, it reserves an available IPv4 address to lease to the client and sends the unicast DHCPOFFER message to the requesting client. When the client receives the DHCPOFFER from the server, it sends back a DHCPREQUEST broadcast message. On receiving the DHCPREQUEST message, the server replies with a unicast DHCPACK message.",
    "topic": "DHCPv4",
    "id": 142
  },
  {
    "question": "What kind of message is sent by a DHCPv4 client requesting an IP address?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DHCPDISCOVER unicast message"
      },
      {
        "id": "b",
        "text": "DHCPDISCOVER broadcast message"
      },
      {
        "id": "c",
        "text": "DHCPOFFER unicast message"
      },
      {
        "id": "d",
        "text": "DHCPACK unicast message"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) DHCPDISCOVER broadcast message",
    "explanation": "When the DHCPv4 client requests an IP address, it sends a DHCPDISCOVER broadcast message seeking a DHCPv4 server on the network.",
    "topic": "DHCPv4",
    "id": 143
  },
  {
    "question": "As a DHCPv4 client lease is about to expire, what is the message that the client sends the DHCP server?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DHCPDISCOVER"
      },
      {
        "id": "b",
        "text": "DHCPREQUEST"
      },
      {
        "id": "c",
        "text": "DHCPACK"
      },
      {
        "id": "d",
        "text": "DHCPOFFER"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) DHCPREQUEST",
    "explanation": "When a DHCP client lease is about to expire, the client sends a DHCPREQUEST message to the DHCPv4 server that originally provided the IPv4 address. This allows the client to request that the lease be extended.",
    "topic": "DHCPv4",
    "id": 144
  },
  {
    "question": "What is the destination IP address when an IPv4 host sends a DHCPDISCOVER message?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "192.168.1.1"
      },
      {
        "id": "b",
        "text": "255.255.255.255"
      },
      {
        "id": "c",
        "text": "0.0.0.0"
      },
      {
        "id": "d",
        "text": "224.0.0.1"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) 255.255.255.255",
    "explanation": "Because a DHCP client does not have a valid IPv4 address, it must use a broadcast IP address of 255.255.255.255 as the destination address to communicate with the DHCP server. The DHCPDISCOVER message sent by the client is the first message sent in order to make initial contact with a DHCP server.",
    "topic": "DHCPv4",
    "id": 145
  },
  {
    "question": "If more than one DHCP server is available on the local network, in which order will DHCP messages be sent between a host and a DHCP server?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "acknowledgment, request, offer, discover"
      },
      {
        "id": "b",
        "text": "request, discover, offer, acknowledgment"
      },
      {
        "id": "c",
        "text": "discover, offer, request, acknowledgment"
      },
      {
        "id": "d",
        "text": "request, acknowledgment, discover, offer"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) acknowledgment, request, offer, discover",
    "explanation": "A DHCP host broadcasts a DHCP discover message to locate available servers. If more than one DHCP server is available, each server will respond to the host with a unicast DHCP offer message, which offers a lease to the client. The client then broadcasts a DHCP request message that identifies the specific server and offer that the client will accept. The identified server will unicast a DHCP acknowledgment message to finalize the offer.",
    "topic": "DHCPv4",
    "id": 146
  },
  {
    "question": "What is the most likely scenario in which the WAN interface of a router would be configured as a DHCP client to be assigned a dynamic IP address from an ISP?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "There is a web server for public access on the LAN that is attached to the router."
      },
      {
        "id": "b",
        "text": "The router is configured as a DHCP server."
      },
      {
        "id": "c",
        "text": "The router is also the gateway for a LAN."
      },
      {
        "id": "d",
        "text": "It is a SOHO or home broadband router."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It is a SOHO or home broadband router.",
    "explanation": "SOHO and home broadband routers are typically set to acquire an IPv4 address automatically from the ISP. The IP address that is assigned is typically a dynamic address to reduce the cost, but a static IP address is possible with more cost. However, if the router is assigned a dynamic IP address, DNS issues will result in the web server behind the router not being easily accessible to the public. Routers are typically also gateways for LANs, but this has no bearing on whether the router is configured as a DHCP client on its WAN link or not. Likewise, a router can be configured to be a DHCP client in order to obtain an IP address from the ISP, but at the same time, it can be configured as a DHCP server to serve the IP addressing for the devices on its LAN.",
    "topic": "DHCPv4",
    "id": 147
  },
  {
    "question": "Which is a DHCPv4 address allocation method that assigns IPv4 addresses for a limited lease period?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "manual allocation"
      },
      {
        "id": "b",
        "text": "dynamic allocation"
      },
      {
        "id": "c",
        "text": "pre-allocation"
      },
      {
        "id": "d",
        "text": "automatic allocation"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) dynamic allocation",
    "explanation": "Dynamic allocation is the most commonly implemented allocation mechanism. It leases the IP parameters for a predefined period of time.",
    "topic": "DHCPv4",
    "id": 148
  },
  {
    "question": "What is the reason why the DHCPREQUEST message is sent as a broadcast during the DHCPv4 process?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "for routers to fill their routing tables with this new information"
      },
      {
        "id": "b",
        "text": "to notify other hosts not to request the same IP address"
      },
      {
        "id": "c",
        "text": "for hosts on other subnets to receive the information"
      },
      {
        "id": "d",
        "text": "to notify other DHCP servers on the subnet that the IP address was leased"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) to notify other DHCP servers on the subnet that the IP address was leased",
    "explanation": "The DHCPREQUEST message is broadcast to inform other DHCP servers that an IP address has been leased.",
    "topic": "DHCPv4",
    "id": 149
  },
  {
    "question": "How is a DHCPDISCOVER transmitted on a network to reach a DHCP server?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A DHCPDISCOVER message is sent with the IP address of the default gateway as the destination address."
      },
      {
        "id": "b",
        "text": "A DHCPDISCOVER message is sent with a multicast IP address that all DHCP servers listen to as the destination address."
      },
      {
        "id": "c",
        "text": "A DHCPDISCOVER message is sent with the broadcast IP address as the destination address."
      },
      {
        "id": "d",
        "text": "A DHCPDISCOVER message is sent with the IP address of the DHCP server as the destination address."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) A DHCPDISCOVER message is sent with the broadcast IP address as the destination address.",
    "explanation": "The DHCPDISCOVER message is sent by a DHCPv4 client and targets a broadcast IP along with the destination port 67. The DHCPv4 server or servers respond to the DHCPv4 clients by targeting port 68.",
    "topic": "DHCPv4",
    "id": 150
  },
  {
    "question": "Which destination IPv4 address does a DHCPv4 client use to send the initial DHCP Discover packet when the client is looking for a DHCP server?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "224.0.0.1"
      },
      {
        "id": "b",
        "text": "255.255.255.255"
      },
      {
        "id": "c",
        "text": "127.0.0.1"
      },
      {
        "id": "d",
        "text": "the IP address of the default gateway"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) 255.255.255.255",
    "explanation": "Broadcast communications on a network may be directed or limited. A directed broadcast is sent to all hosts on a specific network. A limited broadcast is sent to 255.255.255.255. When a DHCP client needs to send a DHCP Discover packet in order to seek DHCP servers, the client will use this IP address of 255.255.255.255 as the destination in the IP header because it has no knowledge of the IP addresses of DHCP servers.",
    "topic": "DHCPv4",
    "id": 151
  },
  {
    "question": "Under which two circumstances would a router usually be configured as a DHCPv4 client? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "This is an ISP requirement."
      },
      {
        "id": "b",
        "text": "The administrator needs the router to act as a relay agent."
      },
      {
        "id": "c",
        "text": "The router is meant to provide IP addresses to the hosts."
      },
      {
        "id": "d",
        "text": "The router is intended to be used as a SOHO gateway."
      },
      {
        "id": "e",
        "text": "The router has a fixed IP address."
      }
    ],
    "correctAnswer": [
      "a",
      "d"
    ],
    "officialKeyDisplay": "a) This is an ISP requirement.; d) The router is intended to be used as a SOHO gateway.",
    "explanation": "SOHO routers are frequently required by the ISP to be configured as DHCPv4 clients in order to be connected to the provider.",
    "topic": "DHCPv4",
    "id": 152
  },
  {
    "question": "Which address does a DHCPv4 server target when sending a DHCPOFFER message to a client that makes an address request?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "broadcast MAC address"
      },
      {
        "id": "b",
        "text": "client hardware address"
      },
      {
        "id": "c",
        "text": "gateway IP address"
      },
      {
        "id": "d",
        "text": "client IP address"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) client hardware address",
    "explanation": "When a DHCPv4 client does not have an IPv4 address, a DHCPv4 server will send a DHCPOFFER message back to the client hardware address of the requesting DHCPv4 client.",
    "topic": "DHCPv4",
    "id": 153
  },
  {
    "question": "Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Broadcast DHCPACK"
      },
      {
        "id": "b",
        "text": "Broadcast DHCPREQUEST"
      },
      {
        "id": "c",
        "text": "Unicast DHCPACK"
      },
      {
        "id": "d",
        "text": "Unicast DHCPREQUEST"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Broadcast DHCPREQUEST",
    "explanation": "When a DHCP client receives DHCPOFFER messages, it will send a broadcast DHCPREQUEST message for two purposes. First, it indicates to the offering DHCP server that it would like to accept the offer and bind the IPv4 address. Second, it notifies any other responding DHCP servers that their offers are declined.",
    "topic": "DHCPv4",
    "id": 154
  },
  {
    "question": "What is an advantage of configuring a Cisco router as a relay agent?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can forward both broadcast and multicast messages on behalf of clients."
      },
      {
        "id": "b",
        "text": "It can provide relay services for multiple UDP services."
      },
      {
        "id": "c",
        "text": "It reduces the response time from a DHCP server."
      },
      {
        "id": "d",
        "text": "It will allow DHCPDISCOVER messages to pass without alteration"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) It can provide relay services for multiple UDP services.",
    "explanation": "By default, the ip helper-address command forwards the following eight UDP services:\nPort 37: Time\nPort 49: TACACS\nPort 53: DNS\nPort 67: DHCP/BOOTP client\nPort 68: DHCP/BOOTP server\nPort 69: TFTP\nPort 137: NetBIOS name service\nPort 138: NetBIOS datagram service",
    "topic": "DHCPv4",
    "id": 155
  },
  {
    "question": "A host on the 10.10.100.0/24 LAN is not being assigned an IPv4 address by an enterprise DHCP server with the address 10.10.200.10/24. What is the best way for the network engineer to resolve this problem?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Issue the default-router 10.10.200.10 command at the DHCP configuration prompt on the 10.10.100.0/24 LAN gateway router."
      },
      {
        "id": "b",
        "text": "Issue the ip helper-address 10.10.100.0 command on the router interface that is the 10.10.200.0/24 gateway."
      },
      {
        "id": "c",
        "text": "Issue the ip helper-address 10.10.200.10 command on the router interface that is the 10.10.100.0/24 gateway."
      },
      {
        "id": "d",
        "text": "Issue the network 10.10.200.0 255.255.255.0 command at the DHCP configuration prompt on the 10.10.100.0/24 LAN gateway router."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Issue the ip helper-address 10.10.100.0 command on the router interface that is the 10.10.200.0/24 gateway.",
    "explanation": "The DHCP server is not on the same network as the hosts, so DHCP relay agent is required. This is achieved by issuing the ip helper-address command on the interface of the router that contains the DHCPv4 clients, in order to direct DHCP messages to the DHCPv4 server IPv4 address.",
    "topic": "DHCPv4",
    "id": 156
  },
  {
    "question": "What is accomplished by the ip dhcp excluded-address 10.10.4.1 10.10.4.5 command?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The DHCP server will ignore all traffic from clients with IPv4 addresses 10.10.4.1 to 10.10.4.5."
      },
      {
        "id": "b",
        "text": "The DHCP server will not issue IPv4 addresses ranging from 10.10.4.1 to 10.10.4.5."
      },
      {
        "id": "c",
        "text": "Traffic destined for 10.10.4.1 to 10.10.4.5 will be denied."
      },
      {
        "id": "d",
        "text": "Traffic from clients with IPv4 addresses 10.10.4.1 to 10.10.4.5 will be denied."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) The DHCP server will ignore all traffic from clients with IPv4 addresses 10.10.4.1 to 10.10.4.5.",
    "explanation": "The router functioning as the DHCPv4 server assigns all IPv4 addresses in a DHCPv4 address pool except addresses specified by the ip dhcp excluded-address low-address [high-address] global config command.",
    "topic": "DHCPv4",
    "id": 157
  },
  {
    "question": "Which Windows command combination would enable a DHCPv4 client to reinstate its IPv4 configuration?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Enter ip config /release and then ip config /autonegotiate"
      },
      {
        "id": "b",
        "text": "Enter ip config /release and then ip config /renew"
      },
      {
        "id": "c",
        "text": "Enter ipconfig /release and then ipconfig /autonegotiate"
      },
      {
        "id": "d",
        "text": "Enter ipconfig /release and then ipconfig /renew"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) Enter ipconfig /release and then ipconfig /renew",
    "explanation": "The ipconfig /release Windows command releases the current host IPv4 configuration and the ipconfig /renew Windows command attempts to renew the IPv4 addressing with the DHCPv4 server.",
    "topic": "DHCPv4",
    "id": 158
  },
  {
    "question": "Which command issued on R1 can be used to verify the current IPv4 address and MAC address binding?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "R1# show ip dhcp binding"
      },
      {
        "id": "b",
        "text": "R1# show ip dhcp pool"
      },
      {
        "id": "c",
        "text": "R1# show ip dhcp server statistics"
      },
      {
        "id": "d",
        "text": "R1# show running-config | section dhcp"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) R1# show ip dhcp binding",
    "explanation": "The show ip dhcp binding command will show the leases, including IPv4 addresses, MAC addresses, lease expiration, type of lease, client ID, and username.",
    "topic": "DHCPv4",
    "id": 159
  },
  {
    "question": "Which DHCP operation statement is true?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A DHCP client must wait for lease expiration before sending a new DHCPREQUEST message."
      },
      {
        "id": "b",
        "text": "If a DHCP client receives several DHCPOFFER messages from different servers, it sends a unicast DHCPACK message to the selected server."
      },
      {
        "id": "c",
        "text": "The DHCPDISCOVER message contains the IPv4 address and subnet mask to be assigned, the IPv4 address of the DNS server, and the IPv4 address of the default gateway."
      },
      {
        "id": "d",
        "text": "When a DHCP client boots, it broadcasts a DHCPDISCOVER message to identify an available DHCP server on the network."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) When a DHCP client boots, it broadcasts a DHCPDISCOVER message to identify an available DHCP server on the network.",
    "explanation": "The client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the network. A DHCP server replies with a DHCPOFFER message. This message offers to the client a lease that contains such information as the IPv4 address and subnet mask to be assigned, the IPv4 address of the DNS server, and the IPv4 address of the default gateway. After the client receives the lease, the received information must be renewed through another DHCPREQUEST message prior to the lease expiration.",
    "topic": "DHCPv4",
    "id": 160
  },
  {
    "question": "How does an IPv6 client ensure that it has a unique address after it configures its IPv6 address using the SLAAC allocation method?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It contacts the DHCPv6 server via a special formed ICMPv6 message."
      },
      {
        "id": "b",
        "text": "It checks with the IPv6 address database that is hosted by the SLAAC server."
      },
      {
        "id": "c",
        "text": "It sends an ARP message with the IPv6 address as the destination IPv6 address."
      },
      {
        "id": "d",
        "text": "It sends an ICMPv6 Neighbor Solicitation message with the IPv6 address as the target IPv6 address."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It sends an ICMPv6 Neighbor Solicitation message with the IPv6 address as the target IPv6 address.",
    "explanation": "SLAAC is a stateless allocation method and does not use a DHCP server to manage the IPv6 addresses. When a host generates an IPv6 address, it must verify that it is unique. The host will send an ICMPv6 Neighbor Solicitation message with its own IPv6 address as the target. As long as no other device responds with a Neighbor Advertisement message, then the address is unique.",
    "topic": "IPv6 Addressing",
    "id": 161
  },
  {
    "question": "Which method would an IPv6-enabled host using SLAAC employ to learn the address of the default gateway?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "neighbor advertisements that are eceived from link neighbors"
      },
      {
        "id": "b",
        "text": "router advertisements that are received from the link router"
      },
      {
        "id": "c",
        "text": "reply messages that are received from the DHCPv6 server"
      },
      {
        "id": "d",
        "text": "advertise messages that are received from the DHCPv6 server"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) router advertisements that are received from the link router",
    "explanation": "When using SLAAC, a host will learn from the router advertisement that is sent by the link router the address to use as a default gateway.",
    "topic": "IPv6 Addressing",
    "id": 162
  },
  {
    "question": "What two methods can be used to generate an interface ID by an IPv6 host that is using SLAAC? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "random generation"
      },
      {
        "id": "b",
        "text": "DAD"
      },
      {
        "id": "c",
        "text": "stateful DHCPv6"
      },
      {
        "id": "d",
        "text": "EUI-64"
      },
      {
        "id": "e",
        "text": "ARP"
      }
    ],
    "correctAnswer": [
      "a",
      "d"
    ],
    "officialKeyDisplay": "a) random generation; d) EUI-64",
    "explanation": "A host that is using SLAAC has two means to configure an interface ID: EUI-64 and random generation by the host operating system.",
    "topic": "IPv6 Addressing",
    "id": 163
  },
  {
    "question": "A client is using SLAAC to obtain an IPv6 address for its interface. After an address has been generated and applied to the interface, what must the client do before it can begin to use this IPv6 address?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It must send a DHCPv6 INFORMATION-REQUEST message to request the address of the DNS server."
      },
      {
        "id": "b",
        "text": "It must send a DHCPv6 REQUEST message to the DHCPv6 server to request permission to use this address."
      },
      {
        "id": "c",
        "text": "It must send an ICMPv6 Router Solicitation message to determine what default gateway it should use."
      },
      {
        "id": "d",
        "text": "It must send an ICMPv6 Neighbor Solicitation message to ensure that the address is not already in use on the network."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It must send an ICMPv6 Neighbor Solicitation message to ensure that the address is not already in use on the network.",
    "explanation": "Stateless DHCPv6 or stateful DHCPv6 uses a DHCP server, but Stateless Address Autoconfiguration (SLAAC) does not. A SLAAC client can automatically generate an address that is based on information from local routers via Router Advertisement (RA) messages. Once an address has been assigned to an interface via SLAAC, the client must ensure via Duplicate Address Detection (DAD) that the address is not already in use. It does this by sending out an ICMPv6 Neighbor Solicitation message and listening for a response. If a response is received, then it means that another device is already using this address.",
    "topic": "IPv6 Addressing",
    "id": 164
  },
  {
    "question": "Which command should be configured on a router interface to set the router as a stateful DHCPv6 client?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ipv6 enable"
      },
      {
        "id": "b",
        "text": "ipv6 address dhcp"
      },
      {
        "id": "c",
        "text": "ipv6 dhcp server stateful"
      },
      {
        "id": "d",
        "text": "ipv6 address autoconfigure"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) ipv6 address dhcp",
    "explanation": "When the ipv6 address dhcp command is configured on a router interface, it enables the router as a DHCPv6 client on this interface. The ipv6 enable command enables IPv6 on an interface and allows the router to configure its link-local address. The ipv6 address autoconfigure command tells the router to use either SLAAC or stateless DHCPv6 to configure its global unicast address. The ipv6 dhcp server command is used on a router that is running a DHCPv6 server to indicate what address information should be served to clients.",
    "topic": "IPv6 Addressing",
    "id": 165
  },
  {
    "question": "What message informs IPv6 enabled interfaces to use stateful DHCPv6 for obtaining an IPv6 address?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "the ICMPv6 Router Advertisement"
      },
      {
        "id": "b",
        "text": "the DHCPv6 Reply message"
      },
      {
        "id": "c",
        "text": "the ICMPv6 Router Solicitation"
      },
      {
        "id": "d",
        "text": "the DHCPv6 Advertise message"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) the ICMPv6 Router Advertisement",
    "explanation": "Before an IPv6 enabled interface will use stateful DHCPv6 to obtain an IPv6 address, the interface must receive an ICMPv6 Router Advertisement with the managed configuration flag (M flag) set to 1.",
    "topic": "IPv6 Addressing",
    "id": 166
  },
  {
    "question": "Which destination IP address is used when an IPv6 host sends a DHCPv6 SOLICIT message to locate a DHCPv6 server?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "FE80::1"
      },
      {
        "id": "b",
        "text": "FF02::2"
      },
      {
        "id": "c",
        "text": "FF02::1:2"
      },
      {
        "id": "d",
        "text": "FF02::1"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) FF02::1:2",
    "explanation": "DHCPv6 hosts will send a DHCP SOLICIT message to the all DHCP routers multicast address of FF02::1:2.",
    "topic": "IPv6 Addressing",
    "id": 167
  },
  {
    "question": "In which alternative to DHCPv6 does a router dynamically provide IPv6 configuration information to hosts?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SLAAC"
      },
      {
        "id": "b",
        "text": "EUI-64"
      },
      {
        "id": "c",
        "text": "ICMPv6"
      },
      {
        "id": "d",
        "text": "ARP"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) SLAAC",
    "explanation": "Stateless Address Autoconfiguration (SLAAC) can be used as an alternative to DHCPv6. In this approach, a router provides global routing prefix, prefix length, default gateway, and DNS server information to a host. The host is not provided with a global unicast address by SLAAC. Instead, SLAAC suggests that the host create its own global unicast address based on the supplied global routing prefix. ARP is not used in IPv6. ICMPv6 messages are used by SLAAC to provide addressing and other configuration information. EUI-64 is a process in which a host will create an Interface ID from its 48-bit MAC address.",
    "topic": "IPv6 Addressing",
    "id": 168
  },
  {
    "question": "A company implements the stateless DHCPv6 method for configuring IPv6 addresses on employee workstations. After a workstation receives messages from multiple DHCPv6 servers to indicate their availability for DHCPv6 service, which message does it send to a server for configuration information?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DHCPv6 REQUEST"
      },
      {
        "id": "b",
        "text": "DHCPv6 INFORMATION-REQUEST"
      },
      {
        "id": "c",
        "text": "DHCPv6 ADVERTISE"
      },
      {
        "id": "d",
        "text": "DHCPv6 SOLICIT"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) DHCPv6 INFORMATION-REQUEST",
    "explanation": "In stateless DHCPv6 configuration, a client configures its IPv6 address by using the prefix and prefix length in the RA message, combined with a self-generated interface ID. It then contacts a DHCPv6 server for additional configuration information via an INFORMATION-REQUEST message. The DHCPv6 SOLICIT message is used by a client to locate a DHCPv6 server. The DHCPv6 ADVERTISE message is used by DHCPv6 servers to indicate their availability for DHCPv6 service. The DHCPv6 REQUEST message is used by a client, in the stateful DHCPv6 configuration, to request ALL configuration information from a DHCPv6 server.",
    "topic": "IPv6 Addressing",
    "id": 169
  },
  {
    "question": "What process is used in ICMPv6 for a host to verify that an IPv6 address is unique before configuring it on an interface?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "EUI-64"
      },
      {
        "id": "b",
        "text": "SLAAC"
      },
      {
        "id": "c",
        "text": "ARP"
      },
      {
        "id": "d",
        "text": "DAD"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) DAD",
    "explanation": "Before an IPv6 host can enable and use an assigned IPv6 address, the host must verify that the address is unique on the network. To verify that no other hosts are using the IPv6 address, the host performs the duplicate address detection (DAD) process by sending a Neighbor Solicitation (NS) message to the IPv6 address.",
    "topic": "IPv6 Addressing",
    "id": 170
  },
  {
    "question": "What are two characteristics of the SLAAC method for IPv6 address configuration? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "Router solicitation messages are sent by the router to offer IPv6 addressing to clients."
      },
      {
        "id": "b",
        "text": "The default gateway of an IPv6 client on a LAN will be the link-local address of the router interface attached to the LAN."
      },
      {
        "id": "c",
        "text": "This stateful method of acquiring an IPv6 address requires at least one DHCPv6 server."
      },
      {
        "id": "d",
        "text": "Clients send router advertisement messages to routers to request IPv6 addressing."
      },
      {
        "id": "e",
        "text": "IPv6 addressing is dynamically assigned to clients through the use of ICMPv6."
      }
    ],
    "correctAnswer": [
      "b",
      "e"
    ],
    "officialKeyDisplay": "b) The default gateway of an IPv6 client on a LAN will be the link-local address of the router interface attached to the LAN.; e) IPv6 addressing is dynamically assigned to clients through the use of ICMPv6.",
    "explanation": "With SLAAC, the default gateway for IPv6 clients will be the link-local address of the router interface that is attached to the client LAN. The IPv6 addressing is dynamically assigned via the ICMPv6 protocol. SLAAC is a stateless method of acquiring an IPv6 address, a method that requires no servers. When a client is configured to obtain its addressing information automatically via SLAAC, the client sends a router solicitation message to the IPv6 all-routers multicast address FF02::2. The router advertisement messages are sent by routers to provide addressing information to clients.",
    "topic": "IPv6 Addressing",
    "id": 171
  },
  {
    "question": "After booting, a client receives an ICMPv6 RA message with the M flag set to 0 and the O flag set to 1. What does this indicate?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The client should request an IPv6 address directly from a DHCPv6 server."
      },
      {
        "id": "b",
        "text": "The client should automatically configure an IPv6 address and then contact a DHCPv6 server for more information."
      },
      {
        "id": "c",
        "text": "The client should automatically configure an IPv6 address without contacting a DHCPv6 server."
      },
      {
        "id": "d",
        "text": "The client should be statically configured with an IPv6 address because the local router does not support autoconfiguration."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) The client should automatically configure an IPv6 address and then contact a DHCPv6 server for more information.",
    "explanation": "The Managed Address Configuration (M) flag and the Other Configuration (O) flag in ICMPv6 RA messages are used to indicate to an IPv6 client how it should configure its IPv6 addresses. If the M flag is set to 0 it means that the host should automatically configure its own IPv6 interface address rather than asking for one from a DHCPv6 server. If the O flag is set to 1, it means that the client can find additional addressing information, such as a DNS server address, by contacting a DHCPv6 server after it has automatically configured its own address.",
    "topic": "IPv6 Addressing",
    "id": 172
  },
  {
    "question": "A network administrator is entering the command ipv6 unicast-routing to start configuring DHCPv6 operation on a router. Which statement describes the function of this command?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is required for enabling DNS service in DHCPv6 configurations."
      },
      {
        "id": "b",
        "text": "It is required for sending ICMPv6 RA messages."
      },
      {
        "id": "c",
        "text": "It is required to configure stateless DHCPv6 server on the router."
      },
      {
        "id": "d",
        "text": "It is required to configure stateful DHCPv6 server on the router."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) It is required for sending ICMPv6 RA messages.",
    "explanation": "The ipv6 unicast-routing command is required to enable IPv6 routing on a router. This command is not necessary for the router to be a stateless or stateful DHCPv6 server, but is required for sending ICMPv6 RA messages.",
    "topic": "IPv6 Addressing",
    "id": 173
  },
  {
    "question": "A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The all-routers multicast address"
      },
      {
        "id": "b",
        "text": "The global unicast address of the router interface that is attached to the network"
      },
      {
        "id": "c",
        "text": "The link-local address of the router interface that is attached to the network"
      },
      {
        "id": "d",
        "text": "The unique local address of the router interface that is attached to the network"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) The link-local address of the router interface that is attached to the network",
    "explanation": "When a PC is configured to use the SLAAC method for configuring IPv6 addresses, it will use the prefix and prefix-length information that is contained in the RA message, combined with a 64-bit interface ID (obtained by using the EUI-64 process or by using a random number that is generated by the client operating system), to form an IPv6 address. It uses the link-local address of the router interface that is attached to the LAN segment as its IPv6 default gateway address.",
    "topic": "IPv6 Addressing",
    "id": 174
  },
  {
    "question": "A network administrator configures a router to send RA messages with the A flag and O flag set to 1. The M flag is set to 0. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It should contact a DHCPv6 server for all the information that it needs."
      },
      {
        "id": "b",
        "text": "It should contact a DHCPv6 server for the prefix, the prefix-length information, and an interface ID that is both random and unique."
      },
      {
        "id": "c",
        "text": "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information."
      },
      {
        "id": "d",
        "text": "It should use the information that is contained in the RA message exclusively."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information.",
    "explanation": "ICMPv6 RA messages contain flags to indicate whether a workstation should use SLAAC, a DHCPv6 server, or a combination to configure its IPv6 address. The A flag determines whether to use SLAAC. The O flag indicates whether to use a stateless DHCPv6 server. The M flag indicates whether to use stateful DHCPv6. The M and O flags are independent of SLAAC.",
    "topic": "IPv6 Addressing",
    "id": 175
  },
  {
    "question": "An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "RA and EUI-64"
      },
      {
        "id": "b",
        "text": "SLAAC"
      },
      {
        "id": "c",
        "text": "Stateful DHCPv6"
      },
      {
        "id": "d",
        "text": "SLAAC and stateless DHCPv6"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) SLAAC and stateless DHCPv6",
    "explanation": "SLAAC and stateless DHCPv6 enable clients to use ICMPv6 Router Advertisement (RA) messages to automatically assign IPv6 addresses to themselves, and also allow these clients to contact a stateless DHCPv6 server to obtain additional information, such as the domain name and address of DNS servers. Because the M flag is 0 by default, stateful DHCPv6 will not be used. RA messages are used to automatically create an interface IPv6 address.",
    "topic": "IPv6 Addressing",
    "id": 176
  },
  {
    "question": "What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A randomly generated 64-bit hexadecimal address"
      },
      {
        "id": "b",
        "text": "An IPv4 address that is configured on the interface"
      },
      {
        "id": "c",
        "text": "An IPv6 address that is provided by a DHCPv6 server"
      },
      {
        "id": "d",
        "text": "The MAC address of an Ethernet interface"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) The MAC address of an Ethernet interface",
    "explanation": "The EUI-64 process uses the MAC address of an Ethernet interface to construct an interface ID (IID). Because the MAC address is only 48 bits in length, 16 additional bits (FF:FE) must be added to the MAC address to create the full 64-bit interface ID. The 7th bit is flipped, which modifies the second hex digit of the interface id.",
    "topic": "IPv6 Addressing",
    "id": 177
  },
  {
    "question": "A network administrator is implementing DHCPv6 for the company. The administrator configures a router to send RA messages with M flag as 1 by using the ipv6 nd managed-config-flag interface command, and the A flag is set to 0 using the ipv6 nd prefix default no-autoconfig command. What effect will this configuration have on the operation of the clients?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Clients must use all configuration information that is provided by a DHCPv6 server."
      },
      {
        "id": "b",
        "text": "Clients must use the information that is contained in RA messages."
      },
      {
        "id": "c",
        "text": "Clients must use the prefix and prefix length that are provided by a DHCPv6 server and generate a random interface ID."
      },
      {
        "id": "d",
        "text": "Clients must use the prefix and prefix length that are provided by RA messages and obtain additional information from a DHCPv6 server."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) Clients must use all configuration information that is provided by a DHCPv6 server.",
    "explanation": "Under stateful DHCPv6 configuration, which is indicated by setting M flag as 1 (through the ipv6 nd managed-config-flag interface command), the dynamic IPv6 address assignments are managed by the DHCPv6 server. Clients must obtain all configuration information from a DHCPv6 server. The A flag determines whether to use SLAAC.",
    "topic": "IPv6 Addressing",
    "id": 178
  },
  {
    "question": "An organization requires that LAN clients generate their IPv6 configuration using SLAAC. You have configured the IPv6 GUA on the router LAN interface and verified that the interface is UP. However, hosts are not generating an IPv6 GUA. Which other command should be configured to enable SLAAC?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "R1(config)# ipv6 dhcp pool pool-name"
      },
      {
        "id": "b",
        "text": "R1(config)# ipv6 unicast-routing"
      },
      {
        "id": "c",
        "text": "R1(config-if)# ipv6 enable"
      },
      {
        "id": "d",
        "text": "R1(config-if)# ipv6 nd other-config-flag"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) R1(config)# ipv6 unicast-routing",
    "explanation": "For a router to be able to send RA messages, it must be enabled as an IPv6 router using the ipv6 unicast-routing global config command.",
    "topic": "IPv6 Addressing",
    "id": 179
  },
  {
    "question": "A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It should contact a DHCPv6 server for all the information that it needs."
      },
      {
        "id": "b",
        "text": "It should contact a DHCPv6 server for the prefix, the prefix-length information, and an interface ID that is both random and unique."
      },
      {
        "id": "c",
        "text": "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information."
      },
      {
        "id": "d",
        "text": "It should use the information that is contained in the RA message exclusively."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information.",
    "explanation": "When the A flag is set to 1 (default) the client will use SLAAC to configure its GUA address. When M flag is 0 and O flag is 1, a client will look for other configuration parameters (such as DNS server addresses) from a stateless DHCPv6 server.",
    "topic": "IPv6 Addressing",
    "id": 180
  },
  {
    "question": "When SLAAC is used, which address will a client use as its default gateway?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The connecting router interface GUA"
      },
      {
        "id": "b",
        "text": "The connecting router link-local address"
      },
      {
        "id": "c",
        "text": "The IPv6 all-nodes group multicast IPv6 address FF02::1"
      },
      {
        "id": "d",
        "text": "The IPv6 all-routers group multicast IPv6 address FF02::2"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) The connecting router link-local address",
    "explanation": "Unless a device has been configured statically with a default gateway address, the device can only obtain its default gateway dynamically from the Router Advertisement message. The device will use the link-local address of the router interface, the source IPv6 address of the RA, that is attached to the LAN segment as its IPv6 default gateway address.",
    "topic": "IPv6 Addressing",
    "id": 181
  },
  {
    "question": "What is the purpose of HSRP?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It prevents a rogue switch from becoming the STP root."
      },
      {
        "id": "b",
        "text": "It provides a continuous network connection when a router fails."
      },
      {
        "id": "c",
        "text": "It enables an access port to immediately transition to the forwarding state."
      },
      {
        "id": "d",
        "text": "It prevents malicious hosts from connecting to trunk ports."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) It provides a continuous network connection when a router fails.",
    "explanation": "HSRP is a first hop redundancy protocol and allows hosts to use multiple gateways through the use of a single virtual router.",
    "topic": "First-Hop Redundancy",
    "id": 182
  },
  {
    "question": "Which nonproprietary protocol provides router redundancy for a group of routers which support IPv4 LANs?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SLB"
      },
      {
        "id": "b",
        "text": "HSRP"
      },
      {
        "id": "c",
        "text": "VRRPv2"
      },
      {
        "id": "d",
        "text": "GLBP"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) VRRPv2",
    "explanation": "The only nonproprietary FHRP used for router redundancy listed in the options is VRRPv2. HSRP and GLBP are both Cisco proprietary FHRPs. IOS SLB is a Cisco-based solution used to load balance traffic across multiple servers.",
    "topic": "First-Hop Redundancy",
    "id": 183
  },
  {
    "question": "A network administrator is analyzing first-hop router redundancy protocols. What is a characteristic of VRRPv3?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It works together with HSRP."
      },
      {
        "id": "b",
        "text": "It allows load balancing between routers."
      },
      {
        "id": "c",
        "text": "VRRPv3 is Cisco proprietary."
      },
      {
        "id": "d",
        "text": "It supports IPv6 and IPv4 addressing."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It supports IPv6 and IPv4 addressing.",
    "explanation": "VRRPv3 is a non-proprietary, first-hop router redundancy protocol. It provides features for both IPv4 and IPv6 addressing. HSRP and GLBP are both Cisco-proprietary protocols. GLBP provides load balancing between a group of redundant routers.",
    "topic": "First-Hop Redundancy",
    "id": 184
  },
  {
    "question": "What is a potential disadvantage when implementing HSRP as compared to GLBP?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HSRP provides default gateway failover only when the active router fails."
      },
      {
        "id": "b",
        "text": "HSRP does not function in a multivendor environment."
      },
      {
        "id": "c",
        "text": "HSRP does not provide load balancing with multiple active routers."
      },
      {
        "id": "d",
        "text": "HSRP does not have the capability to support IPv6 addresses."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) HSRP does not provide load balancing with multiple active routers.",
    "explanation": "HSRP is a first-hop redundancy protocol that can utilize a group of routers, where a single router is acting as the default gateway and all other HSRP routers will maintain a backup status. GLBP supports load balancing, where multiple active routers can share the traffic load at a single time. Both HSRP and GLBP are Cisco proprietary. HSRP provides default gateway failover when pre-set conditions are met or when the active router fails, and HSRP can support IPv6 addressing.",
    "topic": "First-Hop Redundancy",
    "id": 185
  },
  {
    "question": "A network engineer is configuring a LAN with a redundant first hop to make better use of the available network resources. Which protocol should the engineer implement?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HSRP"
      },
      {
        "id": "b",
        "text": "GLBP"
      },
      {
        "id": "c",
        "text": "FHRP"
      },
      {
        "id": "d",
        "text": "VRRP"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) GLBP",
    "explanation": "Gateway Load Balancing Protocol (GLBP) provides load sharing between a group of redundant routers while also protecting data traffic from a failed router or circuit.",
    "topic": "First-Hop Redundancy",
    "id": 186
  },
  {
    "question": "When first hop redundancy protocols are used, which two items will be shared by a set of routers that are presenting the illusion of being a single router? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "IP address"
      },
      {
        "id": "b",
        "text": "BID"
      },
      {
        "id": "c",
        "text": "hostname"
      },
      {
        "id": "d",
        "text": "MAC address"
      },
      {
        "id": "e",
        "text": "static route"
      }
    ],
    "correctAnswer": [
      "a",
      "d"
    ],
    "officialKeyDisplay": "a) IP address; d) MAC address",
    "explanation": "In order for a set of routers to present the illusion of being a single router, they must share both an IP address and MAC address. A static route, BID, or hostname does not have to be shared in this context.",
    "topic": "First-Hop Redundancy",
    "id": 187
  },
  {
    "question": "In FHRP terminology, what represents a set of routers that present the illusion of a single router to hosts?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "virtual router"
      },
      {
        "id": "b",
        "text": "default gateway"
      },
      {
        "id": "c",
        "text": "forwarding router"
      },
      {
        "id": "d",
        "text": "standby router"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) virtual router",
    "explanation": "In FHRP multiple routers are configured to work together to present to hosts a single gateway router. This single gateway router is a virtual router which has a virtual IP address that is used by hosts as a default gateway.",
    "topic": "First-Hop Redundancy",
    "id": 188
  },
  {
    "question": "A user needs to add redundancy to the routers in a company. What are the three options the user can use? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "HSRP"
      },
      {
        "id": "b",
        "text": "VRRP"
      },
      {
        "id": "c",
        "text": "RAID"
      },
      {
        "id": "d",
        "text": "STP"
      },
      {
        "id": "e",
        "text": "GLBP"
      },
      {
        "id": "f",
        "text": "IPFIX"
      }
    ],
    "correctAnswer": [
      "a",
      "b",
      "e"
    ],
    "officialKeyDisplay": "a) HSRP; b) VRRP; e) GLBP",
    "explanation": "Three protocols that provide default gateway redundancy include VRRP, GLBP, and HSRP.",
    "topic": "First-Hop Redundancy",
    "id": 189
  },
  {
    "question": "Which two protocols provide gateway redundancy at Layer 3? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "HSRP"
      },
      {
        "id": "b",
        "text": "PVST"
      },
      {
        "id": "c",
        "text": "STP"
      },
      {
        "id": "d",
        "text": "VRRP"
      },
      {
        "id": "e",
        "text": "RSTP"
      }
    ],
    "correctAnswer": [
      "a",
      "d"
    ],
    "officialKeyDisplay": "a) HSRP; d) VRRP",
    "explanation": "HSRP (Hot Standby Routing Protocol) and VRRP (Virtual Router Redundancy Protocol) are both Layer 3 redundancy protocols. Both protocols allow multiple physical routers to act as a single virtual gateway router for hosts.",
    "topic": "First-Hop Redundancy",
    "id": 190
  },
  {
    "question": "A network administrator is overseeing the implementation of first hop redundancy protocols. Which two protocols are Cisco proprietary? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "IRDP"
      },
      {
        "id": "b",
        "text": "GLBP"
      },
      {
        "id": "c",
        "text": "VRRP"
      },
      {
        "id": "d",
        "text": "VRRPv2"
      },
      {
        "id": "e",
        "text": "HSRP"
      }
    ],
    "correctAnswer": [
      "b",
      "e"
    ],
    "officialKeyDisplay": "b) GLBP; e) HSRP",
    "explanation": "The first hop redundancy protocols HSRP and GLBP are Cisco proprietary and will not function in a multivendor environment.",
    "topic": "First-Hop Redundancy",
    "id": 191
  },
  {
    "question": "Which statement describes a characteristic of GLBP?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It provides automatic rerouting if any router in the group fails."
      },
      {
        "id": "b",
        "text": "It does not provide support for IPv6."
      },
      {
        "id": "c",
        "text": "It provides multiple virtual IP addresses and multiple virtual MAC addresses."
      },
      {
        "id": "d",
        "text": "It provides load balancing for a maximum of four gateways."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) It provides multiple virtual IP addresses and multiple virtual MAC addresses.",
    "explanation": "GLBP provides support for IPv6. It provides one virtual IP address and multiple virtual MAC addresses, and there is no such limit of four gateways to provide load balancing.",
    "topic": "First-Hop Redundancy",
    "id": 192
  },
  {
    "question": "A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement is a feature that is associated with GLBP?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "GLBP allows load balancing between routers."
      },
      {
        "id": "b",
        "text": "It is nonproprietary."
      },
      {
        "id": "c",
        "text": "It uses a virtual router master."
      },
      {
        "id": "d",
        "text": "It works together with VRRP."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) GLBP allows load balancing between routers.",
    "explanation": "The GLBP first-hop router redundancy protocol is Ciscoproprietary and supports load balancing between a group of redundant routers. VRRPv2 and VRRPv3 are nonproprietary protocols and use a virtual router master.",
    "topic": "First-Hop Redundancy",
    "id": 193
  },
  {
    "question": "Which statement about HSRP operation is true?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HSRP supports only clear-text authentication."
      },
      {
        "id": "b",
        "text": "The active router responds to requests for the virtual MAC and virtual IP address."
      },
      {
        "id": "c",
        "text": "The AVF responds to default gateway ARP requests."
      },
      {
        "id": "d",
        "text": "The HSRP virtual IP address must be the same as one of the router’s interface addresses on the LAN."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) The active router responds to requests for the virtual MAC and virtual IP address.",
    "explanation": "Hosts send traffic to their default gateways, which is the virtual IP address and the virtual MAC address. The virtual IP address is assigned by the administrator, whereas the virtual MAC address is created automatically by HSRP. The virtual IPv4 and MAC addresses provide consistent default gateway addressing for the end devices. Only the HSRP active router responds to the virtual IP and virtual MAC address.",
    "topic": "First-Hop Redundancy",
    "id": 194
  },
  {
    "question": "Which HSRP preemption statement is true?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It enables a router that boots first to become the active router."
      },
      {
        "id": "b",
        "text": "It is enabled by default."
      },
      {
        "id": "c",
        "text": "It is enabled using the standby preempt interface command."
      },
      {
        "id": "d",
        "text": "It is enabled using the standby priority interface command."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) It is enabled using the standby preempt interface command.",
    "explanation": "To force a new HSRP election process when a higher priority router comes online, preemption must be enabled using the standby preempt interface command.",
    "topic": "First-Hop Redundancy",
    "id": 195
  },
  {
    "question": "Which statement regarding VRRP is true?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "VRRP elects a master router and one or more other routers as backup routers."
      },
      {
        "id": "b",
        "text": "VRRP elects a master router, one backup router, and all other routers are standby routers."
      },
      {
        "id": "c",
        "text": "VRRP elects an active router and a standby router, and all other routers are backup routers."
      },
      {
        "id": "d",
        "text": "VRRP is a Cisco proprietary protocol."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) VRRP elects a master router and one or more other routers as backup routers.",
    "explanation": "VRRP selects a master router and one or more other routers as backup router. Backup VRRP backup routers monitor the VRRP master router.",
    "topic": "First-Hop Redundancy",
    "id": 196
  },
  {
    "question": "A network administrator is overseeing the implementation of first hop redundancy protocols. Which protocol is a Cisco proprietary protocol?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HSRP"
      },
      {
        "id": "b",
        "text": "IRDP"
      },
      {
        "id": "c",
        "text": "Proxy ARP"
      },
      {
        "id": "d",
        "text": "VRRP"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) HSRP",
    "explanation": "HSRP and GLBP are Cisco proprietary protocols, and VRRP is an IEEE non-proprietary open standard protocol.",
    "topic": "First-Hop Redundancy",
    "id": 197
  },
  {
    "question": "Which is a characteristic of the HSRP Learn state?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The router actively participates in the active/standby election process."
      },
      {
        "id": "b",
        "text": "The router has not determined the virtual IP address."
      },
      {
        "id": "c",
        "text": "The router knows the virtual IP address."
      },
      {
        "id": "d",
        "text": "The router sends periodic hello messages."
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) The router has not determined the virtual IP address.",
    "explanation": "In the Learn state, the router has not determined the virtual IP address and has not yet seen a hello message from the active router. In this state, the router waits to hear from the active router.",
    "topic": "First-Hop Redundancy",
    "id": 198
  },
  {
    "question": "A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement describes a feature that is associated with VRRP?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "VRRP assigns active and standby routers."
      },
      {
        "id": "b",
        "text": "VRRP assigns an IP address and default gateway to hosts."
      },
      {
        "id": "c",
        "text": "VRRP enables load balancing between a group of redundant routers."
      },
      {
        "id": "d",
        "text": "VRRP is a non-proprietary protocol."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) VRRP is a non-proprietary protocol.",
    "explanation": "VRRP is a non-proprietary election protocol that dynamically assigns responsibility for one or more virtual routers to the VRRP routers on an IPv4 LAN.",
    "topic": "First-Hop Redundancy",
    "id": 199
  },
  {
    "question": "When HSRP is used in a network, what destination MAC address is used in frames that are sent from the workstation to the default gateway?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "MAC address of the forwarding router"
      },
      {
        "id": "b",
        "text": "MAC addresses of both the forwarding and standby routers"
      },
      {
        "id": "c",
        "text": "MAC address of the standby router"
      },
      {
        "id": "d",
        "text": "MAC address of the virtual router"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) MAC address of the virtual router",
    "explanation": "When frames are sent from HSRP host devices to the default gateway, the destination MAC address of the frame is the virtual router MAC address.",
    "topic": "First-Hop Redundancy",
    "id": 200
  },
  {
    "question": "What happens to a host in an HSRP network when the active router fails?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The host initiates a new ARP request."
      },
      {
        "id": "b",
        "text": "The host stops seeing hello messages from the active router."
      },
      {
        "id": "c",
        "text": "The host uses the standby router IP and MAC addresses."
      },
      {
        "id": "d",
        "text": "The host will notice little or no disruption of service."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) The host will notice little or no disruption of service.",
    "explanation": "When the active router fails, the standby router stops seeing hello messages, assumes the role of the forwarding router, and the host devices see no disruption in service.",
    "topic": "First-Hop Redundancy",
    "id": 201
  },
  {
    "question": "Which of the following correctly describes GLBP?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is a Cisco proprietary FHRP and provides redundancy and load sharing."
      },
      {
        "id": "b",
        "text": "It is an open standard FHRP."
      },
      {
        "id": "c",
        "text": "It uses virtual master routers and one or more backup routers."
      },
      {
        "id": "d",
        "text": "It is a legacy open standard FHRP that allows IPv4 hosts to discover gateway routers."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) It is a Cisco proprietary FHRP and provides redundancy and load sharing.",
    "explanation": "GLBP is a Cisco proprietary FHRP protocol that provides redundancy and load balancing (also called load sharing) between a group of redundant routers.",
    "topic": "First-Hop Redundancy",
    "id": 202
  },
  {
    "question": "What two protocols are supported on Cisco devices for AAA communications? (Choose two.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "RADIUS"
      },
      {
        "id": "b",
        "text": "LLDP"
      },
      {
        "id": "c",
        "text": "HSRP"
      },
      {
        "id": "d",
        "text": "VTP"
      },
      {
        "id": "e",
        "text": "TACACS+"
      }
    ],
    "correctAnswer": [
      "a",
      "e"
    ],
    "officialKeyDisplay": "a) RADIUS; e) TACACS+",
    "explanation": "Two AAA protocols are supported on Cisco devices, TACACS+ and RADIUS. Hot Standby Router Protocol (HSRP) is used on Cisco routers to allow for gateway redundancy. Link Layer Discovery Protocol (LLDP) is a protocol for neighbor discovery. VLAN trunking protocol (VTP) is used on Cisco switches to manage VLANs on a VTP-enabled server switch.",
    "topic": "LAN Security",
    "id": 203
  },
  {
    "question": "Which service is enabled on a Cisco router by default that can reveal significant information about the router and potentially make it more vulnerable to attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HTTP"
      },
      {
        "id": "b",
        "text": "LLDP"
      },
      {
        "id": "c",
        "text": "CDP"
      },
      {
        "id": "d",
        "text": "FTP"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) CDP",
    "explanation": "CDP is a Cisco proprietary protocol that gathers information from other connected Cisco devices, and is enabled by default on Cisco devices. LLDP is an open standard protocol which provides the same service. It can be enabled on a Cisco router. HTTP and FTP are Application Layer protocols that do not collect information about network devices.",
    "topic": "LAN Security",
    "id": 204
  },
  {
    "question": "When security is a concern, which OSI Layer is considered to be the weakest link in a network system?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Layer 4"
      },
      {
        "id": "b",
        "text": "Layer 7"
      },
      {
        "id": "c",
        "text": "Layer 2"
      },
      {
        "id": "d",
        "text": "Layer 3"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) Layer 2",
    "explanation": "Security is only as strong as the weakest link in the system, and Layer 2 is considered to be that weakest link. In addition to protecting Layer 3 to Layer 7, network security professionals must also mitigate attacks to the Layer 2 LAN infrastructure.",
    "topic": "LAN Security",
    "id": 205
  },
  {
    "question": "Which Layer 2 attack will result in a switch flooding incoming frames to all ports?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "MAC address overflow"
      },
      {
        "id": "b",
        "text": "Spanning Tree Protocol manipulation"
      },
      {
        "id": "c",
        "text": "IP address spoofing"
      },
      {
        "id": "d",
        "text": "ARP poisoning"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) MAC address overflow",
    "explanation": "When an attacker rapidly sends frames with spoofed MAC addresses to a switch, the MAC address table of the switch becomes full. Once the MAC address table of the switch is full, the switch will flood all new incoming frames to all ports.",
    "topic": "LAN Security",
    "id": 206
  },
  {
    "question": "Why is authentication with AAA preferred over a local database method?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It specifies a different password for each line or port."
      },
      {
        "id": "b",
        "text": "It requires a login and password combination on the console, vty lines, and aux ports."
      },
      {
        "id": "c",
        "text": "It provides a fallback authentication method if the administrator forgets the username or password."
      },
      {
        "id": "d",
        "text": "It uses less network bandwidth."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) It provides a fallback authentication method if the administrator forgets the username or password.",
    "explanation": "The local database method of authentication does not provide a fallback authentication method if an administrator forgets the username or password. Password recovery will be the only option. When authentication with AAA is used, a fallback method can be configured to allow an administrator to use one of many possible backup authentication methods.",
    "topic": "LAN Security",
    "id": 207
  },
  {
    "question": "In a server-based AAA implementation, which protocol will allow the router to successfully communicate with the AAA server?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SSH"
      },
      {
        "id": "b",
        "text": "802.1x"
      },
      {
        "id": "c",
        "text": "RADIUS"
      },
      {
        "id": "d",
        "text": "TACACS"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) RADIUS",
    "explanation": "With a server-based method, the router accesses a central AAA server using either the Remote Authentication Dial-In User (RADIUS) or Terminal Access Controller Access Control System (TACACS+) protocol. SSH is a protocol used for remote login. 802.1x is a protocol used in port-based authentication. TACACS is a legacy protocol and is no longer used.",
    "topic": "LAN Security",
    "id": 208
  },
  {
    "question": "Which Cisco solution helps prevent MAC and IP address spoofing attacks?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dynamic ARP Inspection"
      },
      {
        "id": "b",
        "text": "IP Source Guard"
      },
      {
        "id": "c",
        "text": "Port Security"
      },
      {
        "id": "d",
        "text": "DHCP Snooping"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) IP Source Guard",
    "explanation": "Cisco provides solutions to help mitigate Layer 2 attacks including:\n\nIP Source Guard (IPSG) - prevents MAC and IP address spoofing attacks\nDynamic ARP Inspection (DAI) - prevents ARP spoofing and ARP poisoning attacks\nDHCP Snooping - prevents DHCP starvation and SHCP spoofing attacks\nPort Security - prevents many types of attacks including MAC table overflow attacks and DHCP starvation attacks",
    "topic": "LAN Security",
    "id": 209
  },
  {
    "question": "What is the purpose of AAA accounting?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "to determine which resources the user can access"
      },
      {
        "id": "b",
        "text": "to collect and report application usage"
      },
      {
        "id": "c",
        "text": "to prove users are who they say they are"
      },
      {
        "id": "d",
        "text": "to determine which operations the user can perform"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) to collect and report application usage",
    "explanation": "AAA accounting collects and reports application usage data. This data can be used for such purposes as auditing or billing. AAA authentication is the process of verifying users are who they say they are. AAA authorization is what the users can and cannot do on the network after they are authenticated.",
    "topic": "LAN Security",
    "id": 210
  },
  {
    "question": "Which Layer 2 attack will result in legitimate users not getting valid IP addresses?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ARP spoofing"
      },
      {
        "id": "b",
        "text": "DHCP starvation"
      },
      {
        "id": "c",
        "text": "IP address spoofing"
      },
      {
        "id": "d",
        "text": "MAC address flooding"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) DHCP starvation",
    "explanation": "The DHCP starvation attack causes the exhaustion of the IP address pool of a DHCP server before legitimate users can obtain valid IP addresses.",
    "topic": "LAN Security",
    "id": 211
  },
  {
    "question": "Which three Cisco products focus on endpoint security solutions? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "NAC Appliance"
      },
      {
        "id": "b",
        "text": "Adaptive Security Appliance"
      },
      {
        "id": "c",
        "text": "SSL/IPsec VPN Appliance"
      },
      {
        "id": "d",
        "text": "IPS Sensor Appliance"
      },
      {
        "id": "e",
        "text": "Web Security Appliance"
      },
      {
        "id": "f",
        "text": "Email Security Appliance"
      }
    ],
    "correctAnswer": [
      "a",
      "e",
      "f"
    ],
    "officialKeyDisplay": "a) NAC Appliance; e) Web Security Appliance; f) Email Security Appliance",
    "explanation": "The primary components of endpoint security solutions are Cisco Email and Web Security appliances, and Cisco NAC appliance. ASA, SSL/IPsec VPN, and IPS sensor appliances all provide security solutions that focus on the enterprise network, not on endpoint devices.",
    "topic": "LAN Security",
    "id": 212
  },
  {
    "question": "True or False? In the 802.1X standard, the client attempting to access the network is referred to as the supplicant.",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "false"
      },
      {
        "id": "b",
        "text": "true"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) true",
    "explanation": "In 802.1X terminology the client workstation is known as the supplicant.",
    "topic": "LAN Security",
    "id": 213
  },
  {
    "question": "What is involved in an IP address spoofing attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Bogus DHCPDISCOVER messages are sent to consume all the available addresses on a DHCP server."
      },
      {
        "id": "b",
        "text": "A rogue DHCP server provides false IP configuration parameters to legitimate DHCP clients."
      },
      {
        "id": "c",
        "text": "A rogue node replies to an ARP request with its own MAC address indicated for the target IP address."
      },
      {
        "id": "d",
        "text": "A legitimate network IP address is hijacked by a rogue node."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) A legitimate network IP address is hijacked by a rogue node.",
    "explanation": "In an IP address spoofing attack, the IP address of a legitimate network host is hijacked and used by a rogue node. This allows the rogue node to pose as a valid node on the network.",
    "topic": "LAN Security",
    "id": 214
  },
  {
    "question": "What three services are provided by the AAA framework? (Choose three.)",
    "type": "multiple",
    "options": [
      {
        "id": "a",
        "text": "authentication"
      },
      {
        "id": "b",
        "text": "authorization"
      },
      {
        "id": "c",
        "text": "accounting"
      },
      {
        "id": "d",
        "text": "autoconfiguration"
      },
      {
        "id": "e",
        "text": "automation"
      },
      {
        "id": "f",
        "text": "autobalancing"
      }
    ],
    "correctAnswer": [
      "a",
      "b",
      "c"
    ],
    "officialKeyDisplay": "a) authentication; b) authorization; c) accounting",
    "explanation": "The authentication, authorization, and accounting (AAA) framework provides services to help secure access to network devices.",
    "topic": "LAN Security",
    "id": 215
  },
  {
    "question": "Because of implemented security controls, a user can only access a server with FTP. Which AAA component accomplishes this?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "authorization"
      },
      {
        "id": "b",
        "text": "authentication"
      },
      {
        "id": "c",
        "text": "accessibility"
      },
      {
        "id": "d",
        "text": "accounting"
      },
      {
        "id": "e",
        "text": "auditing"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) authorization",
    "explanation": "One of the components in AAA is authorization. After a user is authenticated through AAA, authorization services determine which resources the user can access and which operations the user is allowed to perform.",
    "topic": "LAN Security",
    "id": 216
  },
  {
    "question": "What mitigation plan is best for thwarting a DoS attack that is creating a MAC address table overflow?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Enable port security."
      },
      {
        "id": "b",
        "text": "Disable DTP."
      },
      {
        "id": "c",
        "text": "Disable STP."
      },
      {
        "id": "d",
        "text": "Place unused ports in an unused VLAN."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) Enable port security.",
    "explanation": "A MAC address (CAM) table overflow attack, buffer overflow, and MAC address spoofing can all be mitigated by configuring port security. A network administrator would typically not want to disable STP because it prevents Layer 2 loops. DTP is disabled to prevent VLAN hopping. Placing unused ports in an unused VLAN prevents unauthorized wired connectivity.",
    "topic": "LAN Security",
    "id": 217
  },
  {
    "question": "Which of the following encrypts the data on end-devices, which can be decrypted only if a payment is made?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DDoS"
      },
      {
        "id": "b",
        "text": "Ransomware"
      },
      {
        "id": "c",
        "text": "Virus"
      },
      {
        "id": "d",
        "text": "Worm"
      }
    ],
    "correctAnswer": "b",
    "officialKeyDisplay": "b) Ransomware",
    "explanation": "Ransomware encrypts the data on a host and locks access to it until a ransom is paid.",
    "topic": "LAN Security",
    "id": 218
  },
  {
    "question": "Which network security device monitors and encrypts SMTP traffic to block threats and prevent data loss?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ESA"
      },
      {
        "id": "b",
        "text": "NAC"
      },
      {
        "id": "c",
        "text": "NGFW"
      },
      {
        "id": "d",
        "text": "WSA"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) ESA",
    "explanation": "An ESA is a network security device that is specifically designed to monitor and secure SMTP traffic.",
    "topic": "LAN Security",
    "id": 219
  },
  {
    "question": "Which AAA component is responsible for determining what access is permitted?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accounting"
      },
      {
        "id": "b",
        "text": "Administration"
      },
      {
        "id": "c",
        "text": "Authentication"
      },
      {
        "id": "d",
        "text": "Authorization"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) Authorization",
    "explanation": "Authorization determines which resources the user can access and which operations the user is allowed to perform.",
    "topic": "LAN Security",
    "id": 220
  },
  {
    "question": "Which small network router authentication method authenticates device access by referring to local usernames and passwords?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Local AAA authentication"
      },
      {
        "id": "b",
        "text": "Local AAA over RADIUS or TACACS+"
      },
      {
        "id": "c",
        "text": "Server-based AAA"
      },
      {
        "id": "d",
        "text": "Server-based AAA over RADIUS or TACACS+"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) Local AAA authentication",
    "explanation": "Local AAA stores usernames and passwords locally in the Cisco router, and users authenticate against the local database. Local AAA is ideal for small networks.",
    "topic": "LAN Security",
    "id": 221
  },
  {
    "question": "Which 802.1X term is used to describe the device that is responsible for relaying 802.1X responses?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Authenticator"
      },
      {
        "id": "b",
        "text": "Authentication server"
      },
      {
        "id": "c",
        "text": "Client"
      },
      {
        "id": "d",
        "text": "Supplicant"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) Authenticator",
    "explanation": "A switch or wireless access point are 802.1X authenticators in between the client and the authentication server. Authenticators request identifying information from the client, verify that information with the authentication server, and relay a response to the client.",
    "topic": "LAN Security",
    "id": 222
  },
  {
    "question": "Which 802.1X term is used to describe the device that is requesting authentication?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Authenticator"
      },
      {
        "id": "b",
        "text": "Authentication server"
      },
      {
        "id": "c",
        "text": "Client"
      },
      {
        "id": "d",
        "text": "Supplicant"
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) Supplicant",
    "explanation": "The supplicant is the client that is requesting network access.",
    "topic": "LAN Security",
    "id": 223
  },
  {
    "question": "Which mitigation technique prevents MAC address table overflow attacks?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DAI"
      },
      {
        "id": "b",
        "text": "Firewalls"
      },
      {
        "id": "c",
        "text": "Port security"
      },
      {
        "id": "d",
        "text": "VPNs"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) Port security",
    "explanation": "Port security prevents many types of attacks, including MAC address table overflow.",
    "topic": "LAN Security",
    "id": 224
  },
  {
    "question": "Which mitigation technique prevents ARP spoofing and ARP poisoning attacks?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DAI"
      },
      {
        "id": "b",
        "text": "Firewalls"
      },
      {
        "id": "c",
        "text": "Port security"
      },
      {
        "id": "d",
        "text": "VPNs"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) DAI",
    "explanation": "Dynamic ARP Inspection (DAI) prevents ARP spoofing and ARP poisoning attacks.",
    "topic": "LAN Security",
    "id": 225
  },
  {
    "question": "Which type of attack does IPSG mitigate?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It prevents ARP spoofing and ARP poisoning attacks."
      },
      {
        "id": "b",
        "text": "It prevents DHCP starvation and DHCP spoofing attacks."
      },
      {
        "id": "c",
        "text": "It prevents MAC address table overflow attacks."
      },
      {
        "id": "d",
        "text": "It prevents MAC and IP address spoofing."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) It prevents MAC and IP address spoofing.",
    "explanation": "IP Source Guard (IPSG) prevents MAC and IP address spoofing.",
    "topic": "LAN Security",
    "id": 226
  },
  {
    "question": "What happens to a compromised switch during a MAC address table attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The switch interfaces will transition to error-disabled state."
      },
      {
        "id": "b",
        "text": "The switch will drop all received frames."
      },
      {
        "id": "c",
        "text": "The switch will flood all incoming frames to all other ports in the VLAN."
      },
      {
        "id": "d",
        "text": "The switch will shut down."
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) The switch will flood all incoming frames to all other ports in the VLAN.",
    "explanation": "A MAC address table attack will fill the MAC address table. When the MAC address table is full, the switch treats the frame as an unknown unicast and begins to flood all incoming traffic to all ports only within the local VLAN.",
    "topic": "LAN Security",
    "id": 227
  },
  {
    "question": "Why would a threat actor launch a MAC address overflow attack on a small network?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To capture frames destined for other LAN devices"
      },
      {
        "id": "b",
        "text": "To ensure legitimate hosts cannot forward traffic"
      },
      {
        "id": "c",
        "text": "To launch a DoS attack"
      },
      {
        "id": "d",
        "text": "To overwhelm the switch and drop frames"
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) To capture frames destined for other LAN devices",
    "explanation": "MAC address table attacks are conducted to overwhelm a switch to disregard the MAC address table entries and instead forward incoming traffic out all ports. Threat actors connected to the LAN can then capture traffic using a protocol analyzer such as Wireshark.",
    "topic": "LAN Security",
    "id": 228
  },
  {
    "question": "Which is an example of a DHCP starvation attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A threat actor changes the MAC address of the threat actor's device to the MAC address of the default gateway."
      },
      {
        "id": "b",
        "text": "A threat actor configures a host with the 802.1Q protocol and forms a trunk with the connected switch."
      },
      {
        "id": "c",
        "text": "A threat actor discovers the IOS version and IP addresses of the local switch."
      },
      {
        "id": "d",
        "text": "A threat actor leases all the available IP addresses on a subnet to deny legitimate clients DHCP resources."
      },
      {
        "id": "e",
        "text": "A threat actor sends a BPDU message with priority 0."
      },
      {
        "id": "f",
        "text": "A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway."
      }
    ],
    "correctAnswer": "d",
    "officialKeyDisplay": "d) A threat actor leases all the available IP addresses on a subnet to deny legitimate clients DHCP resources.",
    "explanation": "DHCP starvation attacks occur when a threat actor requests and receives all the available IP addresses for a subnet.",
    "topic": "LAN Security",
    "id": 229
  },
  {
    "question": "Which is an example of an STP attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A threat actor changes the MAC address of the threat actor’s device to the MAC address of the default gateway."
      },
      {
        "id": "b",
        "text": "A threat actor configures a host with the 802.1Q protocol and forms a trunk with the connected switch."
      },
      {
        "id": "c",
        "text": "A threat actor discovers the IOS version and IP addresses of the local switch."
      },
      {
        "id": "d",
        "text": "A threat actor leases all the available IP addresses on a subnet to deny legitimate clients DHCP resources."
      },
      {
        "id": "e",
        "text": "A threat actor sends a BPDU message with priority 0."
      },
      {
        "id": "f",
        "text": "A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway."
      }
    ],
    "correctAnswer": "e",
    "officialKeyDisplay": "e) A threat actor sends a BPDU message with priority 0.",
    "explanation": "A threat actor sending BPDU messages with a priority of 0 is trying to become the root bridge in the STP topology.",
    "topic": "LAN Security",
    "id": 230
  },
  {
    "question": "Which is an example of an address spoofing attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A threat actor changes the MAC address of the threat actor’s device to the MAC address of the default gateway."
      },
      {
        "id": "b",
        "text": "A threat actor configures a host with the 802.1Q protocol and forms a trunk with the connected switch."
      },
      {
        "id": "c",
        "text": "A threat actor discovers the IOS version and IP addresses of the local switch."
      },
      {
        "id": "d",
        "text": "A threat actor leases all the available IP addresses on a subnet to deny legitimate clients DHCP resources."
      },
      {
        "id": "e",
        "text": "A threat actor sends a BPDU message with priority 0."
      },
      {
        "id": "f",
        "text": "A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway."
      }
    ],
    "correctAnswer": "a",
    "officialKeyDisplay": "a) A threat actor changes the MAC address of the threat actor’s device to the MAC address of the default gateway.",
    "explanation": "Address spoofing attacks occur when the threat actor changes the MAC and/or IP address of the threat actor’s device to pose as another legitimate device, such as the default gateway.",
    "topic": "LAN Security",
    "id": 231
  },
  {
    "question": "Which is an example of an ARP spoofing attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A threat actor changes the MAC address of the threat actor’s device to the MAC address of the default gateway."
      },
      {
        "id": "b",
        "text": "A threat actor configures a host with the 802.1Q protocol and forms a trunk with the connected switch."
      },
      {
        "id": "c",
        "text": "A threat actor discovers the IOS version and IP addresses of the local switch."
      },
      {
        "id": "d",
        "text": "A threat actor leases all the available IP addresses on a subnet to deny legitimate clients DHCP resources."
      },
      {
        "id": "e",
        "text": "A threat actor sends a BPDU message with priority 0."
      },
      {
        "id": "f",
        "text": "A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway."
      }
    ],
    "correctAnswer": "f",
    "officialKeyDisplay": "f) A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway.",
    "explanation": "A threat actor can send a gratuitous ARP reply causing all devices to believe that the threat actor’s device is a legitimate device, such as the default gateway.",
    "topic": "LAN Security",
    "id": 232
  },
  {
    "question": "Which is an example of a CDP reconnaissance attack?",
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A threat actor changes the MAC address of the threat actor’s device to the MAC address of the default gateway."
      },
      {
        "id": "b",
        "text": "A threat actor configures a host with the 802.1Q protocol and forms a trunk with the connected switch."
      },
      {
        "id": "c",
        "text": "A threat actor discovers the IOS version and IP addresses of the local switch."
      },
      {
        "id": "d",
        "text": "A threat actor leases all the available IP addresses on a subnet to deny legitimate clients DHCP resources."
      },
      {
        "id": "e",
        "text": "A threat actor sends a BPDU message with priority 0."
      },
      {
        "id": "f",
        "text": "A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway"
      }
    ],
    "correctAnswer": "c",
    "officialKeyDisplay": "c) A threat actor discovers the IOS version and IP addresses of the local switch.",
    "explanation": "A threat actor can use packet sniffing software, such as Wireshark, to view the contents of CDP messages, which are sent unencrypted and include a variety of device information, including the IOS version and IP addresses. CDP and LLDP should not be enabled on edge devices and should be disabled globally or on a per-interface basis if not required.",
    "topic": "LAN Security",
    "id": 233
  }
];
