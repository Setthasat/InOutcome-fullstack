const ItemsModel = require('../model/FormsModel')

const getItems = async (req,res) => {
    
    const ResponseInst = new Response();
    const items = await ItemsModel.find();
        try { 
            ResponseInst.setValue(200, "success get items", items)
            const response = ResponseInst.buildResponse();
            return res.json(response).status(200);
        } catch(err) { 
            console.log(`Something went worng : ${err}`);
            ResponseInst.setValue(400, "Something went worng", null);
            const response = ResponseInst.buildResponse();
            return res.json(response).status(400);
        };
};     

const createItems = async (req, res) => {

    const ResponseInst = new Response();
    const { title, cost, InOrOut, date } = req.body;

    // Validate
    if (!title) {
        ResponseInst.setValue(400, "title is invalid", null);
        return res.json(ResponseInst.buildResponse()).status(400);
    } if (!cost) {
        ResponseInst.setValue(400, "cost is invalid", null);
        return res.json(ResponseInst.buildResponse()).status(400);
    } if (!InOrOut) { 
        ResponseInst.setValue(400, "InOrOut is invalid", null);
        return res.json(ResponseInst.buildResponse()).status(400);
    } if (!date) { 
        ResponseInst.setValue(400, "date is invalid", null);
        return res.json(ResponseInst.buildResponse()).status(400);
    };
    // database
    const item = new ItemsModel({
        title, 
        cost, 
        InOrOut, 
        date
    });
    try{
        const items = await ItemsModel.create(item);
        ResponseInst.setValue(201, "create items success", items);
        return res.json(ResponseInst.buildResponse()).status(201);
    } catch(err) { 
        console.log(`something went worng ! : ${err}`);
        ResponseInst.setValue(400, "something went worng !", null);
        return res.json(ResponseInst.buildResponse()).status(400);
    };
};

const deleteItems = async (req, res) => {
    const ResponseInst = new Response();
    const {id} = req.params
    // validate
    if(!id){
        ResponseInst.setValue(400, "id not found", null);
        return res.json(ResponseInst.buildResponse()).status(400);
    }
    // datababse
    try { 
        await ItemsModel.findByIdAndDelete({_id : id});
        ResponseInst.setValue(204, "delete success", null);
        return res.json(ResponseInst.buildResponse()).status(204);
    } catch(err) { 
        console.log("something went worng", err);
        ResponseInst.setValue(400, "somethingwent worng", null);
        return res.json(ResponseInst.buildResponse()).status(400);
    };
};
class Response {
    constructor(responsecode, description, data){
        this.responsecode = responsecode;
        this.description = description;
        this.data = data;
    }

    buildResponse() {
        return {
            status : {
                responsecode : this.responsecode,
                description : this.description
            },
            data : this.data
        };
    };

    setValue(responsecode, description, data){
        this.responsecode = responsecode
        this.description = description
        this.data = data
    };
};

module.exports = {
    getItems,
    createItems,
    deleteItems 
};