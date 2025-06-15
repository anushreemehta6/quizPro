// server/data/nlm.js

module.exports = {
    easy: [
      { question: "What does NLM stand for?", options: ["Numerical Linear Methods", "Network Layer Management", "Numeric Logic Model", "None"], answer: "Numerical Linear Methods" },
      { question: "What is a matrix?", options: ["2D array of numbers", "1D array", "Number", "None"], answer: "2D array of numbers" },
      { question: "What is a vector?", options: ["1D array of numbers", "2D array", "Matrix", "None"], answer: "1D array of numbers" },
      { question: "Which operation adds two vectors?", options: ["Vector addition", "Matrix multiplication", "Scalar division", "None"], answer: "Vector addition" },
      { question: "What is the determinant of a 2x2 matrix [[a,b],[c,d]]?", options: ["ad - bc", "ac - bd", "ab - cd", "ad + bc"], answer: "ad - bc" },
      { question: "What does 'LU' decomposition factor into?", options: ["Lower and Upper triangular matrices", "Left and Up matrices", "Lagrange and Ulam", "None"], answer: "Lower and Upper triangular matrices" },
      { question: "What is the identity matrix?", options: ["Matrix with 1s on diagonal", "Matrix with 0s everywhere", "Matrix with 1s everywhere", "None"], answer: "Matrix with 1s on diagonal" },
      { question: "What is a singular matrix?", options: ["Determinant is zero", "Determinant is one", "Matrix is diagonal", "None"], answer: "Determinant is zero" },
      { question: "Which operation multiplies matrix by scalar?", options: ["Scalar multiplication", "Matrix addition", "Dot product", "None"], answer: "Scalar multiplication" },
      { question: "What is the transpose of a matrix?", options: ["Rows become columns", "Columns become rows", "Both", "None"], answer: "Both" }
    ],
  
    medium: [
      { question: "What is the complexity of Gaussian elimination?", options: ["O(n³)", "O(n²)", "O(n)", "O(log n)"], answer: "O(n³)" },
      { question: "Which method solves Ax = b iteratively?", options: ["Jacobi method", "Gaussian elimination", "LU decomposition", "None"], answer: "Jacobi method" },
      { question: "What is the convergence criterion?", options: ["Norm of error < tolerance", "Error > tolerance", "Error = 0", "None"], answer: "Norm of error < tolerance" },
      { question: "What does the power method find?", options: ["Dominant eigenvalue", "Inverse matrix", "Determinant", "None"], answer: "Dominant eigenvalue" },
      { question: "What is the condition number of a matrix?", options: ["||A|| * ||A⁻¹||", "||A|| + ||A⁻¹||", "||A|| - ||A⁻¹||", "None"], answer: "||A|| * ||A⁻¹||" },
      { question: "Which decomposition is used for symmetric matrices?", options: ["Cholesky", "LU", "QR", "SVD"], answer: "Cholesky" },
      { question: "What is the QR decomposition used for?", options: ["Orthogonalization", "Solving linear equations", "Both", "None"], answer: "Both" },
      { question: "What is a Hessenberg matrix?", options: ["Nearly triangular", "Symmetric", "Diagonal", "None"], answer: "Nearly triangular" },
      { question: "What is the SVD used for?", options: ["Singular Value Decomposition", "System Value Determination", "Vector Decomposition", "None"], answer: "Singular Value Decomposition" },
      { question: "Which method finds all eigenvalues?", options: ["QR algorithm", "Power method", "Jacobi method", "None"], answer: "QR algorithm" }
    ],
  
    hard: [
      { question: "What is the computational cost of SVD for an m×n matrix?", options: ["O(mn²)", "O(m²n)", "O(mn)", "O(n³)"], answer: "O(mn²)" },
      { question: "What is the Gershgorin circle theorem used for?", options: ["Eigenvalue estimation", "Matrix inversion", "Decomposition", "None"], answer: "Eigenvalue estimation" },
      { question: "Which iterative method converges fastest for sparse systems?", options: ["Conjugate Gradient", "Gauss-Seidel", "Jacobi", "None"], answer: "Conjugate Gradient" },
      { question: "What is the complexity of Conjugate Gradient?", options: ["O(n²)", "O(n³)", "O(n)", "O(n^(1.5))"], answer: "O(n²)" },
      { question: "What is orthogonal projection in vector spaces?", options: ["Projection onto subspace", "Projection onto orthogonal space", "Both", "None"], answer: "Projection onto subspace" },
      { question: "What does PCA stand for?", options: ["Principal Component Analysis", "Partial Component Analysis", "Primary Component Algorithm", "None"], answer: "Principal Component Analysis" },
      { question: "What is the Lanczos algorithm used for?", options: ["Eigenvalue problems", "Matrix inversion", "Decomposition", "None"], answer: "Eigenvalue problems" },
      { question: "What is the nullity of a matrix?", options: ["Dimension of null space", "Rank of matrix", "Both", "None"], answer: "Dimension of null space" },
      { question: "Which decomposition applies only to positive definite matrices?", options: ["Cholesky", "LU", "QR", "SVD"], answer: "Cholesky" },
      { question: "What is the pseudoinverse of a matrix?", options: ["Moore-Penrose inverse", "Inverse", "Transpose", "None"], answer: "Moore-Penrose inverse" }
    ]
  };
  