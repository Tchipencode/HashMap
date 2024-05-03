class Node{
   constructor(key=null, value=null, next=null){
      this.key=key;
      this.value=value, 
      this.next=next;
   }
}
class HashMap{
   constructor(size){
      this.size=16;
      this.tables=new Array(size);
      this.keyCount=0;
      this.loadFactor=0.75;
   }

   // resize(){
   //    const newSize=this.size*2;
   //    const newTables=new Array(newSize);
   //    this.size=newSize;
   //    this.tables=newTables; 
   //    this.rehash(newTables, newSize)   ;
   // }
   rehash(){
      const newSize=this.size*2;
      const newTables=new Array(newSize);
      this.size=newSize;
      this.tables=newTables; 
   
      for(let i=0; i<newSize; i++){
         let cur=this.tables[i];
         while(cur){
            const newIndex=this.hash(cur.key);
            let key=cur.key;
            let val=cur.value;
            this.set(key, val);
            cur=cur.next;
         }
      }
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
      if(this.keyCount/this.size>=this.loadFactor){
         this.rehash();
         
      }
      if(!this.tables[index]){
         this.tables[index]=new Node(key, value);
         this.keyCount++;
         return this.tables[index];    
      } else{
         let cur=this.tables[index];
         while(cur){
            if(cur.key==key){
               cur.value=value;
               return cur;
            }
            else{
               cur.next=new Node(key, value); 
               this.keyCount++; 
            }
            cur=cur.next;            
         } 
                
         return cur.next; 
      }          
   }

   // Retrieve a value using key
   get(key){
      const index=this.hash(key);
       
      if(!this.tables[index]){
         return null;
      }
      let cur=this.tables[index];
      const result=[]; 
      while(cur){
         if(cur.key==key){
            result.push(cur.value);
         }
         cur=cur.next;                     
      }
      if(result.length!==0){
         return result;
      }
      else{
         return null;
      }
   }

   // Return true or false based on whether or not the key is in the hash map.
   has(key){
      const index=this.hash(key);
      let cur=this.tables[index];  
      while(cur){
         if(cur.key==key){
            return true;
         }
         cur=cur.next;                     
      }
      return false;
   }

   // Remove the entry with the given key and return true
   remove(key){
      const index=this.hash(key);
      let cur=this.tables[index];
      
      while(cur){
         if(cur.key==key){
            this.tables[index]=cur.next;
               this.keyCount--                 
         }    
         cur=cur.next;                          
      }
      if(!this.tables.includes(key)){
         return true; 
      }
      else{
         return false;
      }
   } 

   // returns the number of stored keys in the hash map.
   length(){
      return this.keyCount;  
   }

   // removes all entries in the hash map.
   clear(){
      this.keyCount=0;
      this.tables=new Array(this.size);
   }

   //  returns an array containing all the keys inside the hash map.
   keys(){
      let keyArr=[];
      for(let table of this.tables){
         while(table){
            keyArr.push(table.key);
            table=table.next;
         }       
      }   
      return keyArr;
   }

   //  returns an array containing all the values.
   values(){
      let valuesArr=[];
      for(let table of this.tables){
         while(table){
            valuesArr.push(table.value);
            table=table.next;
         }       
      }   
      return valuesArr;
   }

   // returns an array that contains each key, value pair
   entries(){
      let entriesArr=[];
      for(let table of this.tables){
         while(table){
            entriesArr.push([table.key, table.value]);
            table=table.next;
         }       
      }   
      return entriesArr;
   }
}

const hashMap=new HashMap(16);
console.log(hashMap.set("john", "smith"));
console.log(hashMap.set("owen", "backer"));
console.log(hashMap.set("carl", "miller"));
console.log(hashMap.set("lena", "manh"));
console.log(hashMap.set("lara", "pigeous"));
console.log(hashMap.set("ariel", "bedou"));
console.log(hashMap.set("anel", "bart"));
console.log(hashMap.set("anel", "bart"));
console.log(hashMap.set("duck", "zhin"));
console.log(hashMap.set("drake", "klaris"));
console.log(hashMap.set("curtis", "jackson"));
console.log(hashMap.set("dine", "hach"));
console.log(hashMap.set("anas", "chiffer"));
console.log(hashMap.set("werner", "jehwin"));
console.log(hashMap.set("jean", "dedieu"));
console.log(hashMap.set("paul", "ballis"));
console.log(hashMap.set("sarah", "mong"));
console.log(hashMap.size);
console.log(hashMap.tables);
console.log(hashMap.length());
console.log(hashMap.get("lara"));
console.log(hashMap.has("carl"));
// console.log(hashMap.remove("john"));
console.log(hashMap.tables);
console.log(hashMap.length());
// console.log(hashMap.clear());
// console.log(hashMap.tables);
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
console.log(hashMap.size);

class HashSet{
   constructor(){}
}