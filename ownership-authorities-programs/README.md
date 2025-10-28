# Ownership and Authorities in Solana

Understanding **ownership** and **authorities** is crucial when developing programs or managing tokens on the Solana blockchain. These determine **who controls accounts** and **what actions are permitted**.

---

##  1. Ownership in Solana

Every Solana **account** has an **owner** — the **program** that controls how that account’s data can be modified.

### Types of Ownership

| Account Type | Owned By | Description |
|---------------|-----------|--------------|
| **System Account** | `System Program` | Regular wallet or user account. |
| **Token Account** | `Token Program` | Stores SPL tokens (like USDC or custom tokens). |
| **Program Account** | `BPF Loader` | A deployed smart contract (on-chain program). |
| **Program Data Account** | `BPF Loader` | Contains the executable code for a program. |

### Ownership Rules

- Only the **owner program** can modify the account’s data.  
- The **System Program** can **reassign ownership** using the `assign` instruction.

```rust
// Example: change ownership of an account
solana_program::system_instruction::assign(&account_pubkey, &new_owner_program_id);
