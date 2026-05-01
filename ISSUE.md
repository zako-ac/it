# Events
```
propagate Message edit, create etc event to DB
```

# Commands
```
/issue new [priority] - Create a new issue. In forum issue channel -> copy it to issue channel. Other -> show modal
/issue list [status] [sort] - List issues. Default status: Open. Status = Open, In Progress, Resolved, Closed, All. Sort = newest, priority
/issue close [issue id] - Close an issue. Only devs can close an issue. (authors also can't). In issue channel -> close the issue. Other -> error. issue id is needed
/issue edit [issue id] - Edit an issue. Only devs can edit an issue. (authors also can't). In issue channel -> show modal to edit the issue. Other -> error. issue id is needed
```

# Message Context Menus
```
- Create Issue: Create an issue from a message. Right click a message -> Apps -> Create Issue. Show modal to create an issue. Pre-fill the content with the message content. Output an ephemeral message with button to the issue message.
```

# Issue
```
- id, title, description
- priority: P1: Critical, P2: High, P3: Medium, P4: Low
- author: author id
- status: Open, In Progress, Resolved, Closed
- assignees: List of users
- created_at, updated_at
- discord_messages: Map<key, { guild id, channel id, discord message id }> where key can be "original_reference", "issue"
```

# Comment
```
- id, issue_id
- author: author id
- content: string
- created_at, updated_at
```

# Author ID
Discord:
```
d:{user id}
```
Cache the username, nickname, avatar to Redis.
