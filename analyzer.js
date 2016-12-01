function analyzeJSON(jsonArray, property, ignoreCount = - 1) {

    if (typeof jsonArray === 'object')
    {
        var NewSet = {};
        for (var i = 0; i < jsonArray.length; i++) {

            var child = jsonArray[i];

            if (child.hasOwnProperty(property))
            {
                var propertyValue = child[property];

                if (NewSet.hasOwnProperty(propertyValue))
                    NewSet[propertyValue]++;
                else
                    NewSet[propertyValue] = 1;
            }
        }
        if (ignoreCount > -1 & ignoreCount > 0) {
            Object.keys(NewSet).map(function (objectKey, index) {
                var value = NewSet[objectKey];
                if (parseInt(value) <= ignoreCount)
                    delete NewSet[objectKey];
            });
        }
        return NewSet;
    }
    return {};
}  