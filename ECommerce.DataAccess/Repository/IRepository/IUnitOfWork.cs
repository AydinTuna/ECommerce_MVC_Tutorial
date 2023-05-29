using System;
namespace ECommerce.DataAccess.Repository.IRepository
{
    public interface IUnitOfWork
    {
        public ICategoryRepository Category { get; }
        public IProductRepository Product { get; }

        void Save();
    }
}

