using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SafariAPI.Models
{
   public class UserInfo
   {
      [Key] // Informs EF that this is the table's unique id
      [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 

      public int id {get; set;}
      public string emailAddress {get; set;}
      public string password {get; set;}
      public UserInfo() {} // 1st Constructor is kept empty
      public UserInfo(int id, string email, string pw){ 
         // Automatically fits new objects into UserInfo model if they have the right kind of data when constructor is called
         this.id = id;
         this.emailAddress = email;
         this.password = pw;
      }
   }
}