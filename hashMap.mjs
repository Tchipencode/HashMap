// class Node{
//    constructor(key=null, value=null, next=null){
//       this.key=key;
//       this.value=value, 
//       this.next=next;
//    }
// }
class HashMap{
   constructor(){
      this.tables=new Array(16);
      this.size=0;
   }
   // Hash function to transform a key into hashcode
   hash(key) {
      let hashCode = 0;
         
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.tables.length;
        
      }
      return hashCode; 
   } 
   // Add a key-value pair to hash table
   
   set(key, value){
      const index= this.hash(key);
      if(!this.tables[index]){
         this.tables[index]=[key, value];   
      } else{
         let table=this.tables[index];
         table.push([key, value]);
      }     
      this.size++;   

   }
   // Retrieve a value using key
   get(key){
      const index=this.hash(key);
      for(let i=0; i<this.tables.length; i++){
         if(this.tables[index][0]==key){
            return this.tables[index][1];
         } else{
            return null;
         }
      }
   }
   // Return true or false based on whether or not the key is in the hash map.
   has(key){
      const index=this.hash(key);
      for(let i=0; i<this.tables.length; i++){
         if(this.tables[index][0]==key){
            return true;
         } else{
            return false;
         }
      }

   }
   // Remove the entry with the given key and return true
   remove(key){
      const index=this.hash(key);
      for(let i=0; i<this.tables.length; i++){
         if(this.tables[index][0]==key){
            this.tables.splice(index, 1);
            this.size--;
            return true;
         } else{
            return false;
         }   
      }
      
   }
   // returns the number of stored keys in the hash map.
   length(){
      return this.size;  
   }
   // removes all entries in the hash map.
   clear(){
      this.size=0;
      this.tables=new Array(16);
   }
   //  returns an array containing all the keys inside the hash map.
   keys(){
      let keyArr=[];
      for(let table of this.tables){
         let cur=table.head;
         for(let i=0; i<table.length; i++){
            keyArr.push(cur.key);
            cur=cur.next;
         }
      }
      // for(let i=0; i<=this.tables.length; i++){
      //    if(this.tables[i]){
      //       keyArr.push(this.tables[i][0]);
      //    } 
      // }
      return keyArr;
   }
}

const hashMap=new HashMap();
console.log(hashMap.hash("john"));
console.log(hashMap.set("john", "smith"));
console.log(hashMap.set("john", "backer"));
console.log(hashMap.set("lena", "manh"));
console.log(hashMap.get("lena"));
console.log(hashMap.has("lena"));
console.log(hashMap.remove("lena"));
console.log(hashMap.tables);
console.log(hashMap.length());
// console.log(hashMap.clear());
console.log(hashMap.tables);
console.log(hashMap.keys());
// console.log(hashMap.tables);
