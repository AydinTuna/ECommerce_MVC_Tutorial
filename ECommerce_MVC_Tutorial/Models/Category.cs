using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ECommerce_MVC_Tutorial.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(30, ErrorMessage = "Don't write book here!")]
        [DisplayName("Category Name")]
        public string Name { get; set; }
        [DisplayName("Display Order")]
        [Range(1, 100, ErrorMessage = "Dude Wth!")]
        public int DisplayOrder { get; set; }
    }
}

