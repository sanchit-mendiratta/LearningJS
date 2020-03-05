(function() {

    var LinkedList = function() {
            this.head = null;   
        },
        LinkedNode = function(data) {
            this.data  = data;
            this.next  = null;
        };
    
    LinkedList.prototype.insert = function(data) {
    
        var node = new LinkedNode(data),
            curr = this.head;
        
        if (!curr) {
            this.head = node;   
        }
        else {
            
            while (curr.next) {
                curr = curr.next;
            }
            
            curr.next = node;
        }
        
        return node;
        
    };
    
    LinkedList.prototype.remove = function(data) {
        
        if (this.head.data === data) {
            this.head = this.head.next || null;
        }
        else {
            
            var curr = this.head,
                prev = null;
        
            while (curr) {

                if (curr.data === data) {
                    prev.next = curr.next;
                    curr      = null;
                }
                else {
                    prev = curr;
                    curr = curr.next;
                }

            }
            
        }
        
    };
    
    LinkedList.prototype.find = function(data) {
        
        var curr = this.head;
        
        while (curr) {
            if (curr.data === data) {
                return curr;
            }
            curr = curr.next;
        }
        
    };
    
    LinkedList.prototype.print = function() {
        
        var curr = this.head;
        
        while (curr) {
            console.log(curr);
            curr = curr.next;
        }
        
    };
    
    LinkedList.prototype.nToLast = function(k) {
        
        var p1 = this.head,
            p2 = this.head;
        
        // move p2 ahead of p1 by k places
        for (var i = 0; i < k - 1; i++) {
             p2 = p2.next;
        }
        
        // keep moving p1 and p2, when p2 hits the end then p1 is k
        while (p2.next) {
            p1 = p1.next;
            p2 = p2.next;
        }
        
        return p1;
        
    };
    
    LinkedList.prototype.reverse = function() {
        
        var curr = this.head,
            prev = null,
            next = null;
        
        while (curr) {
            
            // save the ref to next node to move forward later
            next = curr.next;
            
            // break current link, and set it to node before
            curr.next = prev;
            
            // keep traversing the list by moving pointers forward
            prev = curr;
            curr = next;
            
        }
        
        this.head = prev;
        
    };
    
    LinkedList.prototype.deleteAtNode = function(node) {
        
        // can't delete last node in list
        if (!node || !node.next) {
            return false;   
        }
        
        // copy data from next node to the node to be deleted
        node.data = node.next.data;
        node.next = node.next.next;
        
        return true;
        
    };
    
    var myList = new LinkedList();
    
    myList.insert('a');
    myList.insert('b');
    myList.insert('c');
    myList.insert('d');
    myList.insert('e');
    myList.insert('f');
    
    myList.remove('b');
    myList.find('a');
    
    // e
    myList.nToLast(2);
    
    myList.reverse();
    
    // f->e->d->c->a
    myList.print();
    
}());