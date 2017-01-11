function AddressBook () {
    var self=this;
    self.contact=[];
    self.initialComplete=false;
    self.addContact=function (contact) {
        self.contact.push(contact);
    };
    self.getContact=function (i) {
        return self.contact[i];
    };
    self.deleteContact=function (i) {
        self.contact.splice(i,1);
    };
    self.getInitialContacts=function (cb) {
        setTimeout(function () {
            self.initialComplete=true;
            if(cb){
                return cb();
            }
        },3);
    }
}