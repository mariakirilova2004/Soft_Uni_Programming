using Chainblock.Contracts;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Chainblock
{
    internal class ChainBlock : IChainblock
    {
        private readonly Dictionary<int, ITransaction> transactions;

        public ChainBlock()
        {
            this.transactions = new Dictionary<int, ITransaction>();
        }
        public int Count => this.transactions.Count;

        public void Add(ITransaction tx)
        {
            if(this.Contains(tx))
            {
                return;
            }
            this.transactions.Add(tx.Id, tx);
        }

        public void ChangeTransactionStatus(int id, TransactionStatus newStatus)
        {
            if(!this.Contains(id))
                        {
                throw new ArgumentException();
            }
            this.transactions[id].Status = newStatus;
        }

        public bool Contains(ITransaction tx)
        {
            return this.transactions.ContainsKey(tx.Id);
        }

        public bool Contains(int id)
        {
            return this.transactions.ContainsKey(id);
        }

        public IEnumerable<ITransaction> GetAllInAmountRange(double lo, double hi)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ITransaction> GetAllOrderedByAmountDescendingThenById()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<string> GetAllReceiversWithTransactionStatus(TransactionStatus status)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<string> GetAllSendersWithTransactionStatus(TransactionStatus status)
        {
            throw new NotImplementedException();
        }

        public ITransaction GetById(int id)
        {
            if(!this.Contains(id))
            {
                throw new InvalidOperationException();
            }
            return this.transactions[id];
        }

        public IEnumerable<ITransaction> GetByReceiverAndAmountRange(string receiver, double lo, double hi)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ITransaction> GetByReceiverOrderedByAmountThenById(string receiver)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ITransaction> GetBySenderAndMinimumAmountDescending(string sender, double amount)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ITransaction> GetBySenderOrderedByAmountDescending(string sender)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ITransaction> GetByTransactionStatus(TransactionStatus status)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ITransaction> GetByTransactionStatusAndMaximumAmount(TransactionStatus status, double amount)
        {
            throw new NotImplementedException();
        }

        public IEnumerator<ITransaction> GetEnumerator()
        {
            throw new NotImplementedException();
        }

        public void RemoveTransactionById(int id)
        {
            if(!this.Contains(id))
            {
                throw new InvalidOperationException();
            }
            this.transactions.Remove(id);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}
