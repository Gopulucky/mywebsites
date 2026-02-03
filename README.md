# Assignment - I: Database Management Systems

## SAQ (Short Answer Questions)

### 1. What is DBMS? What are the goals of DBMS?

**DBMS (Database Management System)** is software that provides an interface between users and databases, enabling efficient storage, retrieval, and management of data.

**Goals of DBMS:**
- **Data Independence**: Separate data description from application programs
- **Efficient Data Access**: Optimize query processing and data retrieval
- **Data Integrity and Security**: Maintain data accuracy and control access
- **Data Administration**: Centralized control of data resources
- **Concurrent Access**: Allow multiple users to access data simultaneously
- **Crash Recovery**: Ensure data consistency after system failures
- **Reduced Application Development Time**: Provide standard interfaces and tools

### 2. Explain three levels of abstraction

The three-level architecture (ANSI-SPARC architecture) provides data abstraction:

**Physical Level (Internal Level):**
- Describes how data is actually stored in the database
- Deals with storage structures, file organization, and indexing
- Focuses on storage efficiency and access paths
- Example: Data stored in blocks, B-tree indexes, hash tables

**Logical Level (Conceptual Level):**
- Describes what data is stored and relationships among data
- Defines the complete database structure visible to all users
- Uses schemas, tables, constraints, and relationships
- Example: Tables like Student(ID, Name, Age, Department)

**View Level (External Level):**
- Describes how different users see the data
- Provides customized views for different user groups
- Hides complexity and provides security through data abstraction
- Example: Faculty view showing only relevant student information

### 3. Explain the components of E-R diagram

**Entity-Relationship (E-R) Diagram Components:**

**Entities:**
- Represented by rectangles
- Real-world objects with independent existence
- Example: Student, Course, Department

**Attributes:**
- Represented by ovals connected to entities
- Properties that describe entities
- Types: Simple, Composite, Derived, Multi-valued, Key attributes

**Relationships:**
- Represented by diamonds
- Associations between entities
- Example: Student "enrolls in" Course

**Cardinality:**
- One-to-One (1:1)
- One-to-Many (1:N)
- Many-to-Many (M:N)

**Keys:**
- Primary Key: Underlined attribute
- Foreign Key: References primary key of another entity

### 4. List out different types of Database users

**Database Administrator (DBA):**
- Manages entire database system
- Handles security, backup, and performance tuning

**Database Designers:**
- Design database schema and structure
- Define entities, relationships, and constraints

**Application Programmers:**
- Develop applications that interact with the database
- Write queries and implement business logic

**End Users:**
- **Naive Users**: Use pre-built applications (e.g., banking customers)
- **Sophisticated Users**: Write complex queries (e.g., analysts, engineers)
- **Casual Users**: Occasionally access database with simple queries
- **Specialized Users**: Use database for specific applications (CAD, multimedia)

### 5. What is DBA? List out the functionality of DBA

**DBA (Database Administrator)** is a person responsible for managing, maintaining, and controlling the database system.

**Functionality of DBA:**
- **Schema Definition**: Create and modify database structure
- **Storage Structure Definition**: Define physical storage organization
- **Access Control**: Grant and revoke user permissions
- **Routine Maintenance**: Regular backups, updates, and patches
- **Performance Monitoring**: Optimize queries and system performance
- **Security Management**: Implement security policies and protocols
- **Data Integrity**: Ensure accuracy and consistency of data
- **Recovery and Backup**: Implement disaster recovery plans
- **User Support**: Assist users with database-related issues
- **Capacity Planning**: Monitor growth and plan for future needs

---

## LAQ (Long Answer Questions)

### 1. What is Data Model? Explain various Data Models

**Data Model** is an abstract representation that defines how data is organized, structured, and manipulated in a database system. It provides a conceptual framework for database design.

**Various Data Models:**

**1. Hierarchical Data Model:**
- Organizes data in a tree-like structure
- Parent-child relationships (one-to-many)
- Data accessed through navigation from root
- Example: File systems, organizational charts
- Advantages: Simple, efficient for hierarchical data
- Disadvantages: Redundancy, limited relationships

**2. Network Data Model:**
- Extension of hierarchical model
- Allows many-to-many relationships
- Uses graph structure with nodes and edges
- More flexible than hierarchical model
- Disadvantages: Complex implementation and navigation

**3. Relational Data Model:**
- Most widely used model
- Data organized in tables (relations)
- Rows represent records (tuples)
- Columns represent attributes
- Uses SQL for data manipulation
- Advantages: Simplicity, flexibility, data independence
- Example: MySQL, PostgreSQL, Oracle

**4. Object-Oriented Data Model:**
- Represents data as objects (like OOP)
- Encapsulates data and methods
- Supports inheritance and polymorphism
- Suitable for complex data types
- Example: ObjectDB, db4o

**5. Object-Relational Data Model:**
- Combines relational and object-oriented features
- Extends relational model with object concepts
- Supports complex data types and methods
- Example: PostgreSQL, Oracle

**6. NoSQL Data Models:**
- Document-oriented (MongoDB)
- Key-value stores (Redis)
- Column-family (Cassandra)
- Graph databases (Neo4j)

### 2. How to represent strong entity and weak entity sets in E-R Model

**Strong Entity:**
- Has its own primary key for unique identification
- Exists independently in the database
- Represented by a **single rectangle**
- Has underlined key attribute

**Example:**
```
┌──────────────┐
│   STUDENT    │  (Strong Entity)
└──────────────┘
Attributes: Student_ID (PK), Name, Age, Address
```

**Weak Entity:**
- Cannot be uniquely identified by its own attributes alone
- Depends on a strong entity (owner entity) for identification
- Represented by a **double rectangle**
- Has partial key (discriminator) shown with dashed underline
- Connected to owner entity through identifying relationship (double diamond)

**Example:**
```
┌──────────────┐      ◇◇◇◇◇◇◇◇      ╔══════════════╗
│   EMPLOYEE   │─────< has      >────║  DEPENDENT   ║
└──────────────┘      ◇◇◇◇◇◇◇◇      ╔══════════════╗
(Strong Entity)    (Identifying      (Weak Entity)
                    Relationship)
                    
Employee: Emp_ID (PK), Name, Salary
Dependent: Dep_Name (Partial Key), Age, Relation
Full Key of Dependent: (Emp_ID, Dep_Name)
```

**Key Differences:**
- Strong entity has its own primary key; weak entity needs owner's key
- Strong entity represented by single rectangle; weak entity by double rectangle
- Weak entity depends on strong entity for existence
- Identifying relationship shown with double diamond

### 3. Draw an E-R diagram for Hospital Management System

```
                    ╔════════════╗
                    ║  PATIENT   ║
                    ╔════════════╗
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    Patient_ID      Patient_Name      Address
      (PK)             Phone          DOB
                       Gender
                         │
                         │
                    ◇◇◇◇◇◇◇◇
                  < Admitted >
                    ◇◇◇◇◇◇◇◇
                         │
                         │
    ┌────────────────────┴────────────────────┐
    │                                          │
╔═══════════╗                          ┌──────────┐
║   ROOM    ║                          │  DOCTOR  │
╔═══════════╗                          └──────────┘
    │                                        │
Room_No(PK)                            Doctor_ID(PK)
Room_Type                              Doctor_Name
Availability                           Specialization
                                       Phone
    │                                        │
    │                                        │
    │                                   ◇◇◇◇◇◇◇◇
    │                                 < Treats >
    │                                   ◇◇◇◇◇◇◇◇
    │                                        │
    │                                        │
    │                                  ┌──────────┐
    │                                  │  NURSE   │
    │                                  └──────────┘
    │                                        │
    │                                   Nurse_ID(PK)
    │                                   Nurse_Name
    │                                   Shift
    │
    │                              ┌────────────┐
    └──────────────────────────────│ DEPARTMENT │
                                   └────────────┘
                                         │
                                    Dept_ID(PK)
                                    Dept_Name
                                    Location


╔══════════════╗
║ APPOINTMENT  ║  (Weak Entity - depends on Patient)
╔══════════════╗
      │
 Appointment_ID
 Date_Time
 Status


┌──────────────┐
│ PRESCRIPTION │
└──────────────┘
      │
Prescription_ID(PK)
Medicine_Name
Dosage
Duration
Date_Issued
```

**Relationships:**
- Patient **Admitted** to Room (M:N)
- Doctor **Treats** Patient (M:N)
- Nurse **Assists** Doctor (M:N)
- Department **Has** Doctors (1:N)
- Patient **Has** Appointment (1:N - Identifying)
- Doctor **Issues** Prescription (1:N)

### 4. Explain differences between File System and DBMS

| **Aspect** | **File System** | **DBMS** |
|------------|----------------|----------|
| **Data Redundancy** | High redundancy, same data stored in multiple files | Minimal redundancy through normalization |
| **Data Consistency** | Difficult to maintain consistency | Ensures consistency through constraints |
| **Data Isolation** | Data scattered in various files | Centralized data repository |
| **Data Independence** | Programs dependent on file structure | Physical and logical data independence |
| **Concurrent Access** | Limited or no support | Built-in concurrency control mechanisms |
| **Security** | Minimal security features | Advanced security with authentication and authorization |
| **Backup and Recovery** | Manual backup required | Automated backup and recovery mechanisms |
| **Data Integrity** | No integrity constraints | Enforces integrity constraints (primary key, foreign key) |
| **Query Processing** | Requires custom programming | Standard query language (SQL) |
| **Data Sharing** | Difficult to share data | Easy data sharing among users |
| **Scalability** | Limited scalability | Highly scalable |
| **Cost** | Lower initial cost | Higher initial investment |
| **Complexity** | Simple to implement | More complex but powerful |
| **Transaction Management** | Not supported | ACID properties supported |
| **Example** | Text files, Excel sheets, CSV files | MySQL, Oracle, SQL Server, MongoDB |

**When to use File System:**
- Small applications with simple data
- Single-user systems
- Temporary data storage
- Budget constraints

**When to use DBMS:**
- Multi-user environments
- Large-scale applications
- Complex data relationships
- Need for data integrity and security

### 5. Explain Extended features of E-R Model

**Extended E-R (EER) Model** enhances the basic E-R model with additional concepts for complex database design:

**1. Specialization:**
- Top-down design approach
- Creating sub-entities from a general entity
- Example: Employee → Manager, Technician, Clerk
- Represented by triangle with "IS-A" relationship
- Sub-entities inherit attributes of parent entity

**2. Generalization:**
- Bottom-up design approach
- Combining similar entities into a higher-level entity
- Example: Car, Truck, Motorcycle → Vehicle
- Reverse of specialization

**3. Aggregation:**
- Treating relationships as higher-level entities
- Allows relationships among relationships
- Represented by enclosing relationship in a box
- Example: Employee works on Project (relationship) monitored by Manager

**4. Attribute Inheritance:**
- Sub-entities inherit all attributes of parent entity
- Can have additional specific attributes
- Reduces redundancy in design

**5. Constraints on Specialization/Generalization:**

**Disjoint Constraint:**
- Entity can belong to only one sub-entity
- Represented by "d" in triangle
- Example: Person → Student OR Faculty (not both)

**Overlapping Constraint:**
- Entity can belong to multiple sub-entities
- Represented by "o" in triangle
- Example: Person → Student AND Employee

**Total Participation:**
- Every entity must belong to at least one sub-entity
- Represented by double line
- Example: Every Vehicle must be Car, Truck, or Motorcycle

**Partial Participation:**
- Entity may or may not belong to sub-entities
- Represented by single line
- Example: Employee may or may not be Manager

**6. Union (Category):**
- Sub-entity represents union of different entity types
- Example: Owner could be Person OR Company OR Bank

### 6. Discuss the functionality of Query Evaluation Engine

**Query Evaluation Engine** is a core component of DBMS that processes and executes queries efficiently.

**Main Functions:**

**1. Query Parsing:**
- Checks syntax of SQL query
- Validates table names, column names, and operations
- Converts query into internal representation (parse tree)
- Detects syntax errors and reports to user

**2. Query Translation:**
- Converts high-level query (SQL) to low-level operations
- Transforms parse tree into relational algebra expression
- Creates initial query execution plan

**3. Query Optimization:**
- Generates multiple execution plans
- Estimates cost of each plan (CPU, I/O, memory)
- Selects the most efficient plan
- Uses statistics about data (table size, indexes, distribution)
- Techniques: Rule-based, Cost-based optimization

**4. Query Execution:**
- Implements the chosen execution plan
- Performs operations: selection, projection, join, aggregation
- Manages buffer pools and cache
- Coordinates with storage manager

**5. Access Path Selection:**
- Decides how to access data (sequential scan, index scan)
- Chooses appropriate indexes
- Determines join algorithms (nested loop, hash join, merge join)

**6. Result Generation:**
- Produces final query results
- Formats output according to query requirements
- Returns results to user or application

**7. Runtime Code Generation:**
- Compiles query plan into executable code
- Optimizes runtime performance
- May use JIT (Just-In-Time) compilation

**8. Performance Monitoring:**
- Tracks query execution statistics
- Updates metadata and statistics
- Provides feedback for future optimization

**Example Workflow:**
```
SQL Query: SELECT Name FROM Student WHERE Age > 20

1. Parse: Validate syntax
2. Translate: σ(Age>20)(π(Name)(Student))
3. Optimize: Choose index on Age if available
4. Execute: Scan using index, filter, project
5. Return: List of names
```

**Optimization Techniques:**
- Index selection
- Join ordering
- Predicate pushdown
- Common subexpression elimination
- Parallel execution

### 7. Explain Structure of DBMS with neat diagram

**DBMS Architecture has multiple components working together:**

```
┌─────────────────────────────────────────────────────────────┐
│                         USERS                                │
│         (DBA, Developers, End Users, Applications)           │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│                  USER INTERFACE LAYER                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Query Tools  │  │ Form/Report  │  │  API/ODBC    │      │
│  │   (SQL)      │  │  Generators  │  │   JDBC       │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│              QUERY PROCESSOR LAYER                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  DDL Interpreter  │  DML Compiler  │  Query Optimizer│   │
│  └──────────────────────────────────────────────────────┘   │
│                         │                                    │
│  ┌──────────────────────┴──────────────────────────────┐   │
│  │         Query Evaluation Engine                      │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│               STORAGE MANAGER LAYER                          │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │ Authorization│ │ Transaction  │ │    Buffer    │        │
│  │   & Security │ │   Manager    │ │   Manager    │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │     File     │ │    Index     │ │   Recovery   │        │
│  │   Manager    │ │   Manager    │ │   Manager    │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────┴────────────────────────────────────┐
│                  DISK STORAGE LAYER                          │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │   Data       │ │   Indices    │ │  Data        │        │
│  │   Files      │ │              │ │  Dictionary  │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
│  ┌──────────────────────────────────────────────────┐      │
│  │         Physical Database (Disk)                  │      │
│  └──────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

**Component Details:**

**1. User Interface Layer:**
- **Query Tools**: SQL interfaces for writing queries
- **Forms/Reports**: GUI for data entry and reporting
- **APIs**: ODBC, JDBC for application connectivity

**2. Query Processor:**
- **DDL Interpreter**: Processes Data Definition Language (CREATE, ALTER, DROP)
- **DML Compiler**: Compiles Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE)
- **Query Optimizer**: Optimizes query execution plans
- **Query Evaluation Engine**: Executes optimized queries

**3. Storage Manager:**
- **Authorization Manager**: Controls user access and permissions
- **Transaction Manager**: Ensures ACID properties
- **Buffer Manager**: Manages memory cache for data pages
- **File Manager**: Manages file allocation and organization
- **Index Manager**: Maintains and uses indexes for fast retrieval
- **Recovery Manager**: Handles backup and recovery operations

**4. Disk Storage:**
- **Data Files**: Actual database tables stored on disk
- **Indices**: B-tree, hash indexes for fast access
- **Data Dictionary**: Metadata about database structure
- **Transaction Logs**: Record of all database changes

**Flow of a Query:**
1. User submits SQL query through interface
2. Query processor parses and validates query
3. Optimizer creates efficient execution plan
4. Evaluation engine executes plan
5. Storage manager retrieves data from disk
6. Buffer manager caches frequently used data
7. Results returned to user

**Key Features:**
- **Modularity**: Separate components for different functions
- **Data Independence**: Changes in storage don't affect applications
- **Concurrency**: Multiple users can access simultaneously
- **Recovery**: Transaction logs enable crash recovery
- **Security**: Multiple levels of access control
