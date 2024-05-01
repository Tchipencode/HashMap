class Node{
   constructor(key=null, value=null, next=null){
      this.key=key;
      this.value=value, 
      this.next=next;
   }
}
class HashMap{
   constructor(){
      this.table=new Array(127);
      this.size=0;
   }
   // Hash function to transform a key into hashcode
   hash(key) {
      let hashCode = 0;
         
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i));
        
      }
      return hashCode%this.table.length; 
   } 
   // Add a key-value pair to hash table
   
   set(key, value){
      const index= this.hash(key);
      for(let i=0; i<this.table.length; i++){
         if(!this.table[index]){
            this.table[index]=new Node(key, value);   
         } 
         else{
            let cur=this.table[index];
            cur.next=new Node(key, value);
         }
         return this.table;
      }
      this.size++;
      return this.size;
   }
   // Retrieve a value using key
   get(key){
      const index=this.hash(key);
      for(let i=0; i<this.table.length; i++){
         if(this.table[index].key){
            return this.table[index].value;
         } else{
            return null;
         }
      }

   }
   // Return true or false based on whether or not the key is in the hash map.
   has(key){
      const index=this.hash(key);
      for(let i=0; i<this.table.length; i++){
         if(this.table[index].key){
            return true;
         } else{
            return false;
         }
      }

   }
   // Remove the entry with the given key and return true
   remove(key){
      const index=this.hash(key);
      for(let i=0; i<this.table.length; i++){
         if(this.table[index].key){
            this.table.splice(index, 1);
            return true;
         } else{
            return false;
         }
      }

   }
   // returns the number of stored keys in the hash map.
   length(){
      // const index=this.hash(key);
      let count=0;
      for(let node of this.table){
         count++;
   
      }
      return count;
   }
   // removes all entries in the hash map.
   clear(){
      this.table.splice(0,this.length);
   }
   //  returns an array containing all the keys inside the hash map.
   keys(){

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
console.log(hashMap.table);
console.log(hashMap.length());
