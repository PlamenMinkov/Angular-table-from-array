app.factory('adsData', function (items, $resource, $http, $location) {
    
    function createItem(item) {
        if(validateObj(item)) {
            items.push(item);
            showInfoMessage("Successful Create");
            
            return true;
        } else {
            showInfoMessage("Invalid Data");
            
            return false;
        }
    }
    function editItem(item, id) {
        if(validateObj(item)) {
            items[id] = item;
            showInfoMessage("Successful Edit");
            
            return true;
        } else {
            showInfoMessage("Invalid Data");
            
            return false;
        }
    }
    
    function deleteItem(index) {
        items.splice(index, 1);
        showInfoMessage("Successful Deleted");

        return true;
    }
    
    function validateObj(item) {
        if(item.firstName && item.firstName.length !== 0 &&
                item.lastName && item.lastName.length !== 0 &&
                item.country && item.country.length !== 0 &&
                item.occupation && item.occupation.length !== 0) {
            return true;
        } else {
            return false;
        }
    }

    return {
        createItem: createItem,
        editItem: editItem,
        deleteItem: deleteItem
    };
});