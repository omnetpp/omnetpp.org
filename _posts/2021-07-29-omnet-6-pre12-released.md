---
layout: post
title: OMNeT++ 6.0 Preview 12 Available
category: Software
---
We are very happy to announce that [OMNeT++ 6.0 preview 12 has been released](/download/preview). Compatibility updates for INET will be released in the coming days.

This prerelease contains many small changes and improvements.
An ARM (aarch64) Linux download is also available that can be used as a base for 
ARM based Docker images (or run directly on your Rasberry Pie). 
The Linux aarch64 variant can be used also to run natively on ARM based MACs in Docker
(as long as you have an XServer installed).

<!--more-->

The summary of changes since 6.0pre11:

Simulation kernel:

  - NED functions that take or return values of type 'object' are now allowed.
    One caveat is that module parameters of type 'object' only accept objects
    they fully own. A potential solution is to use the dup() NED function as
    if necessary. An example:

      object a = [1,2,3];
      object b = dup(a);  // without dup() it is an error: value is owned by parameter 'a'

  - cModule now keeps track of submodule vectors as entities, and not just as
    a collection of submodules with vector indices, meaning that we can now
    distinguish between nonexistent and zero-size submodule vectors. Random
    access of vector elements has also became more efficient (constant-time
    operation). Several new methods have been added as part of this change:
    hasSubmoduleVector(), getSubmoduleVectorSize(), addSubmoduleVector(),
    deleteSubmoduleVector(), setSubmoduleVectorSize(), getSubmoduleVectorNames().

  - As part of the above change, several cModule and cModuleType methods have been
    added or updated. A partial list:

    - In cModule, the hasSubmodule(), getSubmoduleNames(), hasGateVector(),
      hasGates() methods have been added for consistency between submodule and
      gate APIs.
    - The return type of the getGateNames() method has been changed from
      std::string<const char*> to std::vector<std::string>, for consistency
      with getSubmoduleNames().
    - cModule: added setIndex() and setNameAndIndex().
    - cModule, cGate: getIndex(), getVectorSize(), gateSize() and similar methods
      now throw for non-vector submodules/gates.
    - cModule: add separate addGateVector() method instead misusing addGate()
      for creating gate vectors, also for consistency with addSubmoduleVector().
    - In cModuleType::create(), the vectorSize parameter of create() has been removed
    - In cModuleType::createScheduleInit(), an index argument was added to allow
      creating submodule vector elements.
    - cModule: added addSubmodule() method which flows more naturally than
      cModuleType::create().

  - There have been changes in submodule and channel iterators. SubmoduleIterator
    has been rewritten due to the change in how submodule vectors are represented,
    which may affect the iteration order in some cases. Iterators now throw an
    exception if a change occurs in the list of submodules/channels during
    iteration. Their APIs have also changed a little: operator-- was removed,
    and init(m) renamed to reset().

  - Improvements in the multi-stage initialization protocol with regard to
    dynamic module creation. Modules now keep track of the last init stage
    they completed (lastCompletedInitStage). During an init stage, iteration
    of modules is restarted if creation/deletion is detected during iteration;
    modules already initialized in the previous round are recognized and skipped
    with the help of lastCompletedInitStage.

  - cComponent: added getNedTypeAndFullName() and getNedTypeAndFullPath().
    They are especially useful in constructing error messages in NED functions.

  - Minor changes in the model change notification classes. In
    cPreModuleAddNotification, the vectorSize field was removed (as it was
    redundant), and in cPostModuleDeleteNotification, the interpretation of
    the index field has changed a little: if the deleted module was not part
    of a module vector, index is now set to -1 instead of 0.

  - New classes: opp_pooledstring, opp_staticpooledstring. They provide pool-
    backed string storage (reference counted and non reference counted,
    respectively). In turn, the cStringPool class was removed; use either
    of the pooled string classes or opp_staticpooledstring::get(const char *)
    instead.

  - cValueArray: added asIntVectorInUnit(), asDoubleVectorInUnit() functions

  - Store origin (file:line) in cPar parameters (more precisely, in
    cDynamicExpression), so we can report it on evaluation errors.
    Most visible change: cPar::parse() gained an extra FileLine argument.
    Also, cDynamicExpression now has get/setSourceLocation()

  - cNedFunction: added search by name AND accepted number of args.

  - cXMLElement change: resolve $MODULE_INDEX, $PARENTMODULE_NAME and similar
    variables to empty string if they are not applicable.

  - Several string functions have been made available for models. A
    representative partial list: opp_isempty(), opp_isblank(),
    opp_nulltoempty(), opp_trim(), opp_split(), opp_splitandtrim(),
    opp_join(), opp_stringendswith(), opp_substringbefore(), etc.

  - cStringTokenizer has been rewritten. It now supports features like
    optional skipping of empty tokens, optional trimming of tokens, optional
    honoring of quotes, optional honoring of parens/brackets/brackets
    (i.e. the input string is not broken into tokens in the middle of a
    parenthesized expression).

  - cClassDescriptor: methods changed to use any_ptr instead of void*
    for passing the object. (any_ptr is smart pointer class that provides
    type safety for void* pointers.) Pointers need to be put into and extracted
    from any_ptr using the new toAnyPtr() / fromAnyPtr() functions. They have
    specialized versions for each type (via templates and overloading).
    For new types, the message compiler generates toAnyPtr()/fromAnyPtr()
    in the header file. For the simulation library classes, these methods
    come from "sim_std_m.h" (generated from sim_std.msg); "sim_std_m.h"
    is now part of <omnetpp.h>.
  - Various other improvements in the simulation library.

Ini files:

  - It is now possible to break long lines without using a trailing backslash.
    Continuation lines are marked as such by indenting them, i.e. an indented
    line is now interpreted as a continuation of the previous line. (It is not
    possible to break a line inside a string constant that way.) Breaking lines
    using a trailing backslash way still works (and it can also be used
    to break string constants, too).
  - The "Config " prefix in section headers is now optional. That is,
    [Config PureAloha] may now be also written as [PureAloha], the two
    are equivalent.

IDE:

  - Several improvements in various editors.
  - Update to Eclipse 4.20, CDT 10.3 and PyDev 8.3. Another change is that
    the JRE in the IDE is now provided by Eclipse JustJ project.

[Download it here](/download/preview).
