 /* Content Retrieval Function (Identifying Fields Only, Customize As Needed) */
   function GetFields(content_type) {
    var cols = [];
    cols.push("ObjectID","ID","Name","CustomerKey","CategoryID");
    if (content_type == "Account") {
     cols = ["Client.EnterpriseID", "BusinessName"];
    }


    else if (content_type == "ContentArea") {
    }
    else if (content_type == "DataExtension") {

     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }




    else if (content_type == "DataFolder") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "CategoryID") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("ParentFolder.ID");
    }

    else if (content_type == "Email") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ObjectID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "Portfolio") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID" || cols[i] == "Name") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("DisplayName");
    }
    else if (content_type == "FilterDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "Group") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "CategoryID" || cols[i] == "CustomerKey") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("Category");
    }
    else if (content_type == "List") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "CategoryID" || cols[i] == "Name") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("Category","ListName");
    }
    else if (content_type == "Template") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "Name") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("TemplateName");
    }
    else if (content_type == "EmailSendDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "QueryDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "TriggeredSendDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    return cols;
   }
