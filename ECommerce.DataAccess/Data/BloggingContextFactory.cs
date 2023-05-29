using System;
using ECommerce.DataAccess.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ECommerce.DataAccess
{
    public class BloggingContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {

        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            optionsBuilder.UseMySql("server=localhost;port=3306;database=E_Commerce;user=root;", ServerVersion.AutoDetect("server=localhost;port=3306;database=E_Commerce;user=root;"));

            return new ApplicationDbContext(optionsBuilder.Options);
        }

    }
}

