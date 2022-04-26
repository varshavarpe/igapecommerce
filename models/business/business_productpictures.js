let Database = require("../Database");
var fs = require("fs")

class Business {
    id = 0;
    productid = 0;
    title = "";
    picpath = "";
    imagecode = "";
    srno = 0;
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.title = "";
        this.productid = 0;
        this.picpath = "";
        this.imagecode = "";
        this.srno = 0;
    }
    save=()=>{
        if (this.imagecode != "") {
            let base64image = this.imagecode.replace(/^data:image\/jpeg;base64,/, "");
            base64image = base64image.replace(/^data:image\/png;base64,/, "");
            this.picpath = "businessproductpicture/" + Math.random().toString(36).substring(2, 7) + ".png";
            fs.writeFile("public/" + this.picpath, base64image, 'base64', function (err) {
                console.log("Error image saving-" + err);
            });
        }
        if(this.id==0){
            this.query = "INSERT INTO business_productpicture(id, title, productid, picpath, srno )  ";
           this.query+= "VALUES ("+ this.id +",'"+ this.title +"','"+ this.productid +"','"+ this.picpath+"','"+ this.srno +"')"; 
        }
        else {
            this.query = "UPDATE cities SET id="+ this.id +",title='"+ this.title+",productid='"+this.productid+"',picpath='"+this.picpath+"',srno='"+this.srno+"' WHERE id=" + this.id;
        }
       console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
    get=()=>{
        this.query = "SELECT * FROM business_productpicture WHERE id = "+this.id;
        console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
    list=()=>{
        this.query =  "SELECT * FROM business_productpicture ";
        console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
    delete=()=>{
        this.query = "DELETE FROM business_productpicture  WHERE id = "+this.id+"";

        console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

}
module.exports={
    Business:Business
}