// server/data/linux.js

module.exports = {
    easy: [
      { question: "What does CLI stand for in Linux?", options: ["Command Line Interface", "Central Linux Interface", "Compute Line Interface", "None"], answer: "Command Line Interface" },
      { question: "Which command shows current directory?", options: ["pwd", "cd", "ls", "dir"], answer: "pwd" },
      { question: "How do you list all files, including hidden ones?", options: ["ls -a", "ls -l", "ls -h", "ls -R"], answer: "ls -a" },
      { question: "Which editor is often used in Linux terminal?", options: ["vi", "notepad", "Word", "Excel"], answer: "vi" },
      { question: "What symbol represents the home directory?", options: ["~", "/", ".", ".."], answer: "~" },
      { question: "Which command copies files?", options: ["cp", "mv", "rm", "touch"], answer: "cp" },
      { question: "Which command moves or renames files?", options: ["mv", "cp", "rm", "mkdir"], answer: "mv" },
      { question: "Which command removes files?", options: ["rm", "del", "erase", "delete"], answer: "rm" },
      { question: "Which command creates a directory?", options: ["mkdir", "rmdir", "touch", "cd"], answer: "mkdir" },
      { question: "Which command displays file contents?", options: ["cat", "more", "less", "All of the above"], answer: "All of the above" }
    ],
  
    medium: [
      { question: "Which file lists user accounts?", options: ["/etc/passwd", "/etc/shadow", "/etc/group", "/etc/hosts"], answer: "/etc/passwd" },
      { question: "How do you change file permissions?", options: ["chmod", "chown", "chgrp", "ls"], answer: "chmod" },
      { question: "What does grep do?", options: ["Search text", "Replace text", "Delete text", "Copy text"], answer: "Search text" },
      { question: "Which command shows running processes?", options: ["ps", "top", "jobs", "All of the above"], answer: "All of the above" },
      { question: "How do you display disk usage?", options: ["du", "df", "ls", "free"], answer: "du" },
      { question: "Which file lists mounted filesystems?", options: ["/etc/fstab", "/etc/mtab", "/etc/swap", "/etc/passwd"], answer: "/etc/fstab" },
      { question: "How do you view last lines of a file?", options: ["tail", "head", "less", "more"], answer: "tail" },
      { question: "What does SSH stand for?", options: ["Secure Shell", "Secure Socket Handshake", "Simple Shell", "None"], answer: "Secure Shell" },
      { question: "Which command changes file ownership?", options: ["chown", "chmod", "chgrp", "ls"], answer: "chown" },
      { question: "How do you search for a file by name?", options: ["find", "grep", "locate", "search"], answer: "find" }
    ],
  
    hard: [
      { question: "What is a symbolic link?", options: ["Reference to another file", "Copy of file", "Backup file", "None"], answer: "Reference to another file" },
      { question: "Which file contains kernel parameters at boot?", options: ["/etc/sysctl.conf", "/boot/grub/grub.cfg", "/etc/fstab", "/etc/hosts"], answer: "/boot/grub/grub.cfg" },
      { question: "What does cron do?", options: ["Schedules tasks", "Monitors CPU", "Manages memory", "Manages users"], answer: "Schedules tasks" },
      { question: "Which command shows network interfaces?", options: ["ifconfig", "ip addr", "netstat", "All of the above"], answer: "All of the above" },
      { question: "What does SELinux stand for?", options: ["Security-Enhanced Linux", "Secure Encrypted Linux", "System-Enhanced Linux", "None"], answer: "Security-Enhanced Linux" },
      { question: "How do you change file access ACLs?", options: ["setfacl", "chmod", "chown", "getfacl"], answer: "setfacl" },
      { question: "Which tool is used for log rotation?", options: ["logrotate", "journalctl", "rsyslog", "syslog"], answer: "logrotate" },
      { question: "What does LVM stand for?", options: ["Logical Volume Manager", "Local Volume Manager", "Linux Volume Module", "None"], answer: "Logical Volume Manager" },
      { question: "How do you update package lists on Debian/Ubuntu?", options: ["apt update", "yum update", "pacman -S", "dnf update"], answer: "apt update" },
      { question: "Which file lists DNS servers?", options: ["/etc/resolv.conf", "/etc/hosts", "/etc/nsswitch.conf", "/etc/networks"], answer: "/etc/resolv.conf" }
    ]
  };
  