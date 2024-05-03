class Node{
   constructor(key=null, value=null, next=null){
      this.key=key;
      this.value=value, 
      this.next=next;
   }
}
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
         this.tables[index]=new Node(key, value);
         this.size++;
         return this.tables[index];    
      } else{
         let cur=this.tables[index];
         while(cur.next!==null){
            cur=cur.next;
            
         } 
         cur.next=new Node(key, value); 
         this.size++;        
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
               this.size--                 
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

const hashMap=new HashMap();
console.log(hashMap.hash("john"));
console.log(hashMap.set("john", "smith"));
console.log(hashMap.set("john", "backer"));
console.log(hashMap.set("hojn", "miller"));
console.log(hashMap.set("lena", "manh"));
console.log(hashMap.length());
console.log(hashMap.get("maël"));
console.log(hashMap.has("hojn"));
// console.log(hashMap.remove("john"));
console.log(hashMap.tables);
console.log(hashMap.length());
// console.log(hashMap.clear());
console.log(hashMap.tables);
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
